import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-c-todolist-body',
  templateUrl: './c-todolist-body.component.html',
  styleUrls: ['./c-todolist-body.component.scss'],
})
export class CTodolistBodyComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input()
  tdData
  tdTrackByName(index, item) {
    return item.name
  }

  @Output()
  change = new EventEmitter()
  tdStatusChange(e, i) {
    e.index = i
    this.change.emit(e)
  }

  @Output()
  delete = new EventEmitter()
  tdDelete(e, i) {
    e.index = i
    this.delete.emit(e)
  }
}
