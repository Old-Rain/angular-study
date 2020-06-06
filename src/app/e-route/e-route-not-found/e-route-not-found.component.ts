/**
 * 编程式导航
 */

import { Component, OnInit } from '@angular/core'

// 1.注入Router依赖
import { Router } from '@angular/router'

@Component({
  selector: 'app-e-route-not-found',
  templateUrl: './e-route-not-found.component.html',
  styleUrls: ['./e-route-not-found.component.scss'],
})
export class ERouteNotFoundComponent implements OnInit {
  constructor(private route: Router) {}

  time = 5

  ngOnInit(): void {
    const timer = setInterval(() => {
      this.time--
      console.log(this.time)

      if (this.time === 0) {
        clearInterval(timer)

        // 2.调用router的navigate方法，参数是一个数组，元素是路径
        this.route.navigate(['/home'])
      }
    }, 1000)
  }
}
