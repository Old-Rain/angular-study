import { Component, OnInit } from '@angular/core'
import { CTodolistService } from '../c-todolist.service'

import { TdDataItem, TdDataRes } from '../c-todolist.intreface'

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

  tdVal: string
  tdData: Array<TdDataItem> = []
  // isSuccess: boolean

  // 初始化
  init() {
    // this.tdData = this.tdService.getTdData()

    this.tdService.getTdData().subscribe(
      (res: TdDataRes<TdDataItem>) => {
        if (res.code !== '0000') {
          return alert(res.message)
        }

        this.tdData = [...res.data]
      },
      ({ error }) => {
        return alert(error.message)
      }
    )
  }

  // 添加操作
  add(e) {
    this.tdService.add(e).subscribe(
      (res: TdDataRes<TdDataItem>) => {
        if (res.code !== '0000') {
          return alert(res.message)
        }

        this.init()
        this.tdVal = ''
      },
      ({ error }) => {
        return alert(error.message)
      }
    )
  }

  // 其他事件
  event(e) {
    this.tdService.event(e).subscribe(
      (res: TdDataRes<TdDataItem>) => {
        if (res.code !== '0000') {
          return alert(res.message)
        }

        this.init()
      },
      ({ error }) => {
        return alert(error.message)
      }
    )
  }
}
