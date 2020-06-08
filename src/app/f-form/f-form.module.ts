/**
 * 第七天
 * 响应式表单
 * 用处：
 *  1) 让开发人员完全掌控表单
 *  2) 表单数据的初始化
 *  3) 表单值的获取
 *  4) 表单值的验证
 *  5) ...
 *
 * 优势：
 *  1) 它提供了一种模型驱动的方式来处理表单
 *  2) 数据驱动视图
 *  3) 同步的数据访问，保证数据和视图是一致的，可预测的
 *  4) 增强了可测试性，让测试变得更简单
 *  5) 内置表单验证器，可自定义验证器
 *  6) ...
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'

import { FForm1BaseComponent } from './f-form1-base/f-form1-base.component'

@NgModule({
  declarations: [FForm1BaseComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FForm1BaseComponent],
})
export class FFormModule {}
