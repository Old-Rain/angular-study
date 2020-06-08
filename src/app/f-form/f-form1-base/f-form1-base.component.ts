/**
 * 一、响应式表单基本用法
 * 1.在模块中import { ReactiveFormsModule } from '@angular/forms'，并添加到import: Array<Module>节点下
 */

import { Component, OnInit } from '@angular/core'

// 2.在组件中导入表单控件
import { FormControl, Validators } from '@angular/forms'

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
    Validators.required, // 表单必填
    Validators.minLength(4), // 长度下限
  ])
  constructor() {}

  ngOnInit(): void {
    console.log(this.user)

    console.dir(Validators)

    // b-3.可以看到pass上有一个errors属性，不满足的条件会写进error；全部通过，则errors为null
    console.log(this.pass)
  }
}
