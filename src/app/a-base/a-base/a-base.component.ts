import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-a-base',
  templateUrl: './a-base.component.html',
  styleUrls: ['./a-base.component.scss'],
})
export class ABaseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // 第一天
  // 属性绑定
  title = 'angular-study'
  href = 'http://www.baidu.com'

  // 事件绑定
  log(e) {
    e.preventDefault()
    console.log('你是大千世界一汪清泉')
  }

  // 双向绑定
  isChecked = true
  value = 'value'
  obj = {
    name: 'Tom',
  }

  // 第二天
  // [ngClass]: { [propName]: boolean }
  classList = {
    pink: true,
    fz12: false,
  }

  // [class.prop]: boolean
  bgGray = true

  // [ngStyle]: { [propName]: string }
  styleList = {
    color: 'lightgreen',
    fontSize: '30px',
  }

  // [style.prop]: string
  green = 'green'

  // *ngIf: boolean
  isShow = false
  isHidden = true

  // *ngFor="let item of prop: Array<any>; let i = index; let odd = odd"
  colors = ['orange', 'cyan', 'purple']

  // *ngFor渲染对象数组的性能问题
  // 引用类型的地址改变，会导致使用这个对象的dom整体刷新（简单数据类型的数组，不会有这种问题）
  // 使用trackBy特性，找到发生变化的元素，局部刷新，提升渲染性能
  // *ngFor="let item of prop: { [propName]: any }[]; trackBy: trackById"
  people = [
    { id: 1, name: '李小花', qq: 5 },
    { id: 2, name: '王富贵', qq: 5 },
    { id: 3, name: '王富贵', qq: 5 },
    { id: 4, name: '王二狗', qq: 5 },
  ]
  reload() {
    this.people = [
      { id: 1, name: '李小花', qq: 6 },
      { id: 2, name: '王富贵666', qq: 5 },
      { id: 3, name: '张全蛋', qq: 5 },
      { id: 4, name: '王二狗', qq: 5 },
    ]
    ////////
    // this.people[1] = { id: 2, name: '王富贵666', qq: 5 }
    ////////
    // this.people[1].name = '王富贵666'
  }
  trackById(index, item) {
    // return item.id
    // return item.name
    return item.qq
    // 需要返回唯一标识，不然在某些情况下会失去作用
  }
}
