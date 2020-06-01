import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ChildComponent } from './child/child.component'

import { ABaseModule } from './a-base/a-base.module'

@NgModule({
  // 该模块所拥有的的组件
  declarations: [AppComponent, ChildComponent],

  // 该模块所依赖的模块
  imports: [BrowserModule, AppRoutingModule, FormsModule, ABaseModule],

  // 该模块所拥有的的服务提供商
  providers: [],

  // 指定根组件，只有跟模块需要配置该项。Angular创建它并插入index.html宿主页面
  bootstrap: [AppComponent],

  // 公开该模块其中的一部分，以便外部模块使用它（根模块就没有必要导出了）
  exports: [],
})
export class AppModule {}
