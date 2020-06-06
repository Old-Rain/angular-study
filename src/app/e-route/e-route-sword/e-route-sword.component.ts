/**
 * 路由参数
 */

import { Component, OnInit } from '@angular/core'

// 1.注入ActivedRoute依赖
import { ActivatedRoute } from '@angular/router'

interface Sword {
  id: string
  name: string
  rank: string
  holder: string
}

@Component({
  selector: 'app-e-route-sword',
  templateUrl: './e-route-sword.component.html',
  styleUrls: ['./e-route-sword.component.scss'],
})
export class ERouteSwordComponent implements OnInit {
  constructor(private activedRoute: ActivatedRoute) {}

  swords: Sword[] = [
    { id: '0', name: '渊虹', rank: '2', holder: '盖聂' },
    { id: '1', name: '水寒', rank: '7', holder: '高渐离' },
    { id: '2', name: '凌虚', rank: '10', holder: '张良' },
  ]

  sword: Sword

  ngOnInit(): void {
    console.log(this.activedRoute)
    console.log(this.activedRoute.params)

    // 2.params和query都是Observable<Params>对象，需要调用subscribe获取
    this.activedRoute.params.subscribe((params) => {
      console.log(params)

      const { id } = params
      this.sword = this.swords.find((item) => item.id === id)
    })
    this.activedRoute.queryParams.subscribe((query) => {
      console.log(query)
    })
  }
}
