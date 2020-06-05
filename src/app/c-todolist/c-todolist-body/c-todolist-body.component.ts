import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { CTodolistService } from '../c-todolist.service'
import { TdDataItem } from '../c-todolist.intreface'

// 携带参数的事件对象
interface List {
  index__: number
  type__: string
}

@Component({
  selector: 'app-c-todolist-body',
  templateUrl: './c-todolist-body.component.html',
  styleUrls: ['./c-todolist-body.component.scss'],
})
export class CTodolistBodyComponent implements OnInit {
  constructor(private tdService: CTodolistService) {}
  ngOnInit(): void {}

  @Input()
  tdData: Array<TdDataItem>
  tdTrackByName(index: number, item: TdDataItem) {
    return item.name
  }

  @Output()
  event: EventEmitter<List> = new EventEmitter()

  tdStatusChange(e, index: number, type: string) {
    e.stopPropagation()

    const e__: List = {
      index__: index,
      type__: type,
    }
    
    this.event.emit(e__)
  }
}
