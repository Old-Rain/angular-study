import { Component } from '@angular/core'

@Component({
  // 选择器（组件名称），对应html中的标签名称，默认以“app-”开头
  selector: 'app-root',

  // 组件模板
  templateUrl: './app.component.html',

  // 内联模板
  // template: `
  //   <a href="http://www.baidu.com" (click)="log($event)">事件绑定</a>
  //   <input type="text" [(ngModel)]="value" />
  //   <span>{{ obj.name }}</span>
  //   <br />
  // `,

  // 样式文件列表
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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

  // todolist
  tdVal = ''
  tdData = [
    { name: '吃饭', status: true },
    { name: '睡觉', status: true },
    { name: '学Angular', status: false },
    { name: '学ts', status: false },
  ]
  tdTrackByName(index, item) {
    return item.name
  }
  tdStatusChange(i) {
    this.tdData[i].status = !this.tdData[i].status
  }
  tdAdd() {
    let val = this.tdVal.trim()
    if (!val) {
      return
    }

    let has = this.tdData.find((item) => item.name === val)
    if (!!has) {
      return
    }

    this.tdData.splice(0, 0, { name: this.tdVal, status: false })
    this.tdVal = ''
  }
  tdDelete(i) {
    this.tdData.splice(i, 1)
  }

  // 第三天
  // 父向子传值
  parentData = '我若不黑化，谁替我变强'
  msiFn = () => console.log('MSI X470 GAMING PRO MAX')

  // 子向父传值
  childData = ''
  howMuch(e) {
    this.childData = e.price
  }
}
