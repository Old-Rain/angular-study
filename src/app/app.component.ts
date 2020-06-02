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
export class AppComponent {}
