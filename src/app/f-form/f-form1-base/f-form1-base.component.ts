/**
 * 一、响应式表单基本用法
 * 1.在模块中import { ReactiveFormsModule } from '@angular/forms'，并添加到import: Array<Module>节点下
 */

import { Component, OnInit } from '@angular/core'

// 2.在组件中导入表单控件 FormControl
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormBuilder,
} from '@angular/forms'

@Component({
  selector: 'app-f-form1-base',
  templateUrl: './f-form1-base.component.html',
  styleUrls: ['./f-form1-base.component.scss'],
})
export class FForm1BaseComponent implements OnInit {
  // 3.使用表单控件初始化属性
  user = new FormControl('reactiveFormsModule学习')

  // a.设置与获取
  // a-1.在input标签上，使用[formControl]指令绑定；非表单组件取值使用user.value
  // a-2.更新表单的值，调用原型链上的setValue方法
  setInputValue() {
    this.user.setValue('好多好多要学')
  }

  // b.内置验证规则
  // b-1.在组件中import { Validators } from '@angular/forms'
  // b-2.在new FormControl中添加第二个参数
  pass = new FormControl('', [
    // Validators.required, // 表单必填
    // Validators.minLength(4), // 长度下限
    Validators.pattern('^6$'), // 正则验证
  ])

  // c.自定义验证
  // c-1.自定义验证器为一个函数，
  // c-2.参数为AbstractControl类型
  // c-3.成功返回null
  // c-4.失败返回错误对线（自定义对象，一般用来描述错误信息）
  email = new FormControl('', [this.regEmail])
  regEmail(email: AbstractControl) {
    console.log('c.自定义验证-email', email)

    if (/^\w+@\w+(\.\w+)+$/.test(email.value)) {
      return null
    }

    return { emailError: '/^\\w+@\\w+(\\.\\w+)+$/' }
  }

  // d.管理所有的表单控件
  // d-1.在组件中import { FormGroup } from '@angular/forms'
  // d-2.new FormGroup，参数为 new FormControl
  // d-3.在form标签上绑定属性[formGroup]="login"
  // d-4.在form里面的input标签上绑定字符串属性formControlName="_name"
  login = new FormGroup({
    _name: new FormControl('', [Validators.required]),
    _pass: new FormControl('', [Validators.required]),
  })
  submit() {
    console.log('d.管理所有的表单控件', this.login)
  }

  // e.响应式表单简化写法
  // 和d达到的效果一样，语法更简洁
  // e-1.在组件中import { FormBuilder } from '@angular/forms'
  // e-2.FormBuilder是一个服务，所以要先在constructor中注册
  constructor(private fb: FormBuilder) {}
  // e-3.调用fb下面的group方法
  _login = this.fb.group({
    _name: ['', [Validators.required, Validators.minLength(4)]], // 第一个元素是初始值，第二个元素是验证器或验证器组成的数组
    _pass: ['', Validators.required],
  })
  _submit() {
    console.log('e.响应式表单简化写法', this._login)
  }

  ngOnInit(): void {
    console.log('a.设置与获取-this.user', this.user)

    console.log('b.内置验证规则-Validators')
    console.dir(Validators)

    console.log('b.内置验证规则-this.pass', this.pass)

    console.log('c.自定义验证-this.email', this.email)

    console.log('d.管理所有的表单控件', this.login)

    console.log('e.响应式表单简化写法', this._login)

    // 纵观上面几个属性，FormControl和FormGroup，实例对象包含的属性其实都是差不多的
  }
}

/**
 * FormControl和FormGroup 实例对象的常用属性
 * state.value // 取值
 * state.error // 验证不通过条件会写进error；全部通过，则errors为null
 * state.dirty // 是否发生过改动，默然false，改动后为true，所以一般情况下验证要在改动之后 （dirty: 下流 ？？？）
 * state.hasError() // 参数为内置校验规则的字符串名称'required'、'minlength'等（把鼠标放在Validators.minLength后面即可看到名称），返回一个布尔值表示该验证是否通过
 * state.valid // 验证是否通过
 */
