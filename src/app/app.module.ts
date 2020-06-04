import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { ABaseModule } from './a-base/a-base.module'
import { BParentChildComponentPassValuesModule } from './b-parent-child-component-pass-values/b-parent-child-component-pass-values.module'
import { CTodolistModule } from './c-todolist/c-todolist.module'
import { DHttpClientModule } from './d-http-client/d-http-client.module'

@NgModule({
  // 该模块所拥有的的组件
  declarations: [AppComponent],

  // 该模块所依赖的模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    ABaseModule,
    BParentChildComponentPassValuesModule,
    CTodolistModule,
    DHttpClientModule,
  ],

  // 该模块所拥有的的服务提供商
  providers: [],

  // 指定根组件，只有根模块需要配置该项。Angular创建它并插入index.html宿主页面
  bootstrap: [AppComponent],

  // 公开该模块其中的一部分，以便外部模块使用它（根模块就没有必要导出了）
  exports: [],
})
export class AppModule {}
