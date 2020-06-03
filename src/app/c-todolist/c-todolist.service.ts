/**
 * 第四天
 * 服务
 * 组件应该只提供用于数据绑定的属性和方法
 * 组件不应该定义任何诸如从服务器获取数据、验证用户输入等操作
 *
 * 应该把各种处理任务定义到可注入的“服务”中
 * 服务的作用：处理业务逻辑，供组件使用
 * 服务和组件的关系：组件是服务的消费者
 *
 * 创建服务
 * ng g(generate) s(service) [moduleName]/[serviceName]
 *
 * 通过@InJectable()装饰器来表示一个服务
 * 服务需要注册提供商才可以使用
 * Angular通过依赖注入（DI）来为组件提供服务
 * DI使得在使用服务时，只提供要使用的服务即可。不需要手动创建服务实例
 * 推荐在constructor中提供组件中用到的服务
 */

// 提供商注册的三种方式

// @Injectable({
//   providedIn: 'root',
// })
// 1. provideIn: 'root' 注册为根级提供商，可以在任意组件中import并使用

// @Injectable()
// 2. 装饰器不带参数，在模块的NgModule装饰器的providers: Array<Service>节点中添加，供模块内的组件import并使用
// 3. 装饰器不带参数，在组件的Component装饰器的providers: Array<Service>节点中添加，供当前组件及子组件import并使用

// 上面这三种方式，配合“constructor(private service: Service) {}”是为了让angular在创建组件的时候能根据不同的场合，决定服务是否能被使用
// 且各模块、组件中使用的是一个服务（class [serviceName]只会被初始化一次）
// 如果使用字面量的写法 private service: Service = new Service()，可以无视提供商是否注册，但是各个服务都是独立的服务

import { Injectable } from '@angular/core'
import { TdDataItem } from './c-todolist.intreface'

@Injectable()
export class CTodolistService {
  tdData: Array<TdDataItem> = []

  getTdData(): Array<TdDataItem> {
    const tdData = [
      { name: '吃饭', status: true },
      { name: '睡觉', status: true },
      { name: '学Angular', status: false },
      { name: '学ts', status: false },
      { name: '学Deno', status: true },
    ]
    this.tdData = tdData
    return tdData
  }

  add({ tdVal }) {
    let has = this.tdData.find((item) => item.name === tdVal)
    if (!!has) {
      return false
    }

    this.tdData.splice(0, 0, { name: tdVal, status: false })
    return true
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
