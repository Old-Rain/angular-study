import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-c-todolist-header',
  templateUrl: './c-todolist-header.component.html',
  styleUrls: ['./c-todolist-header.component.scss'],
})
export class CTodolistHeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  tdVal = ''

  @Input()
  isSuccess

  @Output()
  add = new EventEmitter()

  tdAdd(e) {
    let tdVal = this.tdVal.trim()
    if (!tdVal) {
      return
    }

    e.tdVal = tdVal
    this.add.emit(e)
    
    setTimeout(() => {
      if (this.isSuccess) {
        this.tdVal = ''
      }
    })
  }
}
