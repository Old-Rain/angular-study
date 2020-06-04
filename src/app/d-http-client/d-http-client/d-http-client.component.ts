/**
 * 第五天
 * HttpClient
 * 作用：发送http请求
 * 封装了浏览器提供的XMLHttpRequest接口
 * 使用基于可观察（Observable）对象的API
 * 提供了请求和响应拦截器
 * 流式错误处理机制
 * ……
 *
 * 1.在模块中导入HttpClientModule，并添加到imports: Array<Module>节点
 * 2.在组件或服务中导入HttpClient，并在constructor中创建
 */
import { Component, OnInit } from '@angular/core'
import { HttpClient, HttpResponse } from '@angular/common/http'

import { Base, BaseData } from '../d-http-client.interface'

@Component({
  selector: 'app-d-http-client',
  templateUrl: './d-http-client.component.html',
  styleUrls: ['./d-http-client.component.scss'],
})
export class DHttpClientComponent implements OnInit {
  constructor(private dService: HttpClient) {}

  ngOnInit(): void {
    // 1.基本使用
    // this.dService
    //   .get<Base<BaseData>>('../../assets/d-http-client/a.d-http-client.json')
    //   .subscribe((res: Base<BaseData>) => console.log(res.data))

    // 2.获取完整响应信息及类型约束
    this.dService
      // 给get加上第二个参数{ observe: 'response' }（默认是{ observe: 'body' }）
      // subscribe的回调的参数类型不在是Base，而是泛型HttpResponse<T>
      .get<Base<BaseData>>('../../assets/d-http-client/a.d-http-client.json', {
        observe: 'response',
      })
      .subscribe(
        (res: HttpResponse<Base<BaseData>>) => console.log(res, res.body.data),

        // 3.处理错误信息
        // subscribe的第二个参数即是错误信息，错误信息为完整错误信息，不受响应信息获取的影响（observe: 'response'）
        (err) => console.log(err)
      )

    // 4.HttpClient支持rest风格的请求
    // get、post、delete、patch
    this.dService
      .post('http://dd.ccc.com', { name: '李二' })
      .subscribe((res) => console.log(res))
  }
}
