/**
 * 第六天
 * 一、路由基本用法
 */

// 1-1.在index.html的head里面创建一个基础路径<base href="/">（构建项目时，脚手架已经完成了）
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

// 1-2. 在项目模块中导入路由模块
import { RouterModule, Routes } from '@angular/router'

import { ERouteComponent } from './e-route/e-route.component'
import { ERouteHomeComponent } from './e-route-home/e-route-home.component'
import { ERouteAboutComponent } from './e-route-about/e-route-about.component'
import { ERouteNotFoundComponent } from './e-route-not-found/e-route-not-found.component'
import { ERouteSwordComponent } from './e-route-sword/e-route-sword.component'
import { ERouteChild1Component } from './e-route-child1/e-route-child1.component'
import { ERouteChild2Component } from './e-route-child2/e-route-child2.component'

// 1-3.配置路由
const routes: Routes = [
  // 路由重定向
  {
    path: '',
    redirectTo: '/home/child1',
    pathMatch: 'full',
  },
  {
    path: 'home', // 基础路径上已经带“/”了，所以这里的path不再需要（只有配置路由的时候不带“/”，其他情况下都要带上）
    component: ERouteHomeComponent,

    // 三、子路由：见child页面
    children: [
      // 子路由默认路由，把path置空
      // {
      //   path: '',
      //   component: ERouteChild1Component,
      // },
      {
        path: 'child1',
        component: ERouteChild1Component,
      },
      {
        path: 'child2',
        component: ERouteChild2Component,
      },
    ],
  },
  {
    path: 'about',
    component: ERouteAboutComponent,
  },

  // 二、路由参数：见sword页面
  {
    path: 'sword/:id',
    component: ERouteSwordComponent,
  },

  // 通配符路由（一般也就用在404）
  // 编程式导航：见not-found页面
  {
    path: '**',
    component: ERouteNotFoundComponent,
  },
]

@NgModule({
  declarations: [
    ERouteComponent,
    ERouteHomeComponent,
    ERouteAboutComponent,
    ERouteNotFoundComponent,
    ERouteSwordComponent,
    ERouteChild1Component,
    ERouteChild2Component,
  ],

  // 1-4.RouterModule.forRoot(routes)会返回真正的路由模块，添加到imports
  /**
   * forRoot的问题说明：服务应该是单列的，某些场景下会造成服务多次注册，破坏服务的单列特性
   * 比如：路由懒加载的情况
   * 解决方式：使用模块的forRoot()方法导入模块
   * RouterModule的forRoot()保证项目中只有一个Router服务
   */
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [ERouteComponent],
})
export class ERouteModule {}

// 1-5. & 四、高亮样式
/**
 * <a routerLink="/home" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">首页</a>
 * routerLink即为路由地址
 * routerLinkActive绑定激活路由高亮的样式
 * [routerLinkActiveOptions]="{ exact: true }" 精确匹配路由，父子路由高亮互不干扰
 *
 * // router-outlet组件作为路由出口
 * <router-outlet></router-outlet>
 */
