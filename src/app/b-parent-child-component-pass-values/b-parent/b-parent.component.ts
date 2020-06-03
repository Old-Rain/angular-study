import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-b-parent',
  templateUrl: './b-parent.component.html',
  styleUrls: ['./b-parent.component.scss'],
})
export class BParentComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  
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
