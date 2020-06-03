import { Component, OnInit } from '@angular/core'
import { CTodolistService } from '../c-todolist.service'

import { TdDataItem } from '../c-todolist.intreface'

@Component({
  selector: 'app-c-todolist',
  templateUrl: './c-todolist.component.html',
  styleUrls: ['./c-todolist.component.scss'],
  providers: [CTodolistService],
})
export class CTodolistComponent implements OnInit {
  // private tdService?: CTodolistService = new CTodolistService()
  constructor(private tdService?: CTodolistService) {}
  ngOnInit(): void {
    this.init()
  }

  tdData: Array<TdDataItem> = []
  isSuccess: boolean

  // 初始化
  init() {
    this.tdData = this.tdService.getTdData()
  }

  // 添加操作
  add(e) {
    this.isSuccess = this.tdService.add(e)
  }

  // 其他事件
  event(e) {
    this.tdService.event(e)
  }
}
