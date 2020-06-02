import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-c-todolist',
  templateUrl: './c-todolist.component.html',
  styleUrls: ['./c-todolist.component.scss'],
})
export class CTodolistComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  tdData = [
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

  change({ index }) {
    console.log(index)

    this.tdData[index].status = !this.tdData[index].status
  }

  delete({ index }) {
    this.tdData.splice(index, 1)
  }
}
