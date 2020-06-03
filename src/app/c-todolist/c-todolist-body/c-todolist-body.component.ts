import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { CTodolistService } from '../c-todolist.service'

// 数据源格式
interface TdDataItem {
  name: string
  status: boolean
}

// 事件对象
interface EventObj {
  stopPropagation: Function
}

// 携带参数的事件对象
interface EventHasParams {
  index__: number
  type__: string
  [propName: string]: any
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
  event: EventEmitter<EventHasParams> = new EventEmitter()
  tdStatusChange(e: EventObj, index: number, type: string) {
    e.stopPropagation()

    const e__: EventHasParams = {
      ...e,
      index__: index,
      type__: type,
    }
    this.event.emit(e__)
  }
}
