// 第三天
/**
 * 1.创建组件
 * ng g(generate) c(component) [name]
 * 创建组件，自动生成组件的四个文件，并将组件同步添加到根模块的declarations节点
 */
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-b-child',
  templateUrl: './b-child.component.html',
  styleUrls: ['./b-child.component.scss'],
})
export class BChildComponent implements OnInit {
  /**
   * 2.父向子传值
   * 子组件使用Input装饰器装饰一个属性，表示向外暴露一个属性
   * 在父组件的html中，子组件标签通过属性绑定的形式，获取父组件的属性
   */
  @Input()
  skill
  @Input()
  msi

  /**
   * 3.子向父传值
   * 子组件使用Output装饰器装饰一个EventEmitter的实例对象，表示向外暴露一个事件
   * 子组件需要传值时，使用对象下的emit方法发送事件并携带参数
   * 父组件的html中，子组件标签会触发与实力对象同名的自定义事件
   * 父组件中自定义事件触发后，执行父组件内的方法，子组件标签上事件绑定的方法的参数$event拿到子组件传递的参数
   */
  @Output()
  giveMoney = new EventEmitter()
  handleGiveMoney(e) {
    e.price = '1000'
    this.giveMoney.emit(e)
  }
  
  constructor() {}
  ngOnInit(): void {}
}
