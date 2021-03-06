import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-c-todolist-header',
  templateUrl: './c-todolist-header.component.html',
  styleUrls: ['./c-todolist-header.component.scss'],
})
export class CTodolistHeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  // @Input()
  // isSuccess

  @Input()
  tdVal: string

  @Output()
  add = new EventEmitter()

  tdAdd(e) {
    if (!this.tdVal || !this.tdVal.trim()) {
      return
    }

    e.tdVal = this.tdVal
    this.add.emit(e)

    // setTimeout(() => {
    //   if (this.isSuccess) {
    //     this.tdVal = ''
    //   }
    // })
  }
}
