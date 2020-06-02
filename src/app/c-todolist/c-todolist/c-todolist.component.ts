import { Component, OnInit } from '@angular/core'

interface TdDataItem {
  name: string
  status: boolean
}

@Component({
  selector: 'app-c-todolist',
  templateUrl: './c-todolist.component.html',
  styleUrls: ['./c-todolist.component.scss'],
})
export class CTodolistComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  tdData: Array<TdDataItem> = [
    { name: '吃饭', status: true },
    { name: '睡觉', status: true },
    { name: '学Angular', status: false },
    { name: '学ts', status: false },
  ]

  isSuccess: boolean = false

  add({ tdVal }) {
    let has = this.tdData.find((item) => item.name === tdVal)
    if (!!has) {
      return (this.isSuccess = false)
    }

    this.isSuccess = true
    this.tdData.splice(0, 0, { name: tdVal, status: false })
  }

  event({ index__, type__ }) {
    switch (type__) {
      case 'change':
        return this.change(index__)

      case 'delete':
        return this.delete(index__)

      default:
        break
    }
  }

  change(i: number) {
    this.tdData[i].status = !this.tdData[i].status
  }

  delete(i: number) {
    this.tdData.splice(i, 1)
  }
}
