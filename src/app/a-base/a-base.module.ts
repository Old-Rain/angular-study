/**
 * 创建模块
 * ng g(generate) m(module) [moduleName]
 * 
 * 创建组件
 * ng g(generate) c(component) [moduleName]/[componentName]
 * 
 * 使用模块
 * 在模块中import组件，并在模块的NgModule装饰器的declarations: Array<Component>节点中添加(执行指令时自动完成)
 * 将需要导出的组件，在模块的NgModule装饰器的exports: Array<Component>节点中添加(手动完成)
 * 在父级模块中import该模块，并在父级模块的NgModule装饰器的imports: Array<Module>节点中添加该模块
 * 该模块导出的组件即可在父级模块的组件中使用
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { ABaseComponent } from './a-base/a-base.component'

@NgModule({
  declarations: [ABaseComponent],
  imports: [CommonModule, FormsModule],
  exports: [ABaseComponent],
})
export class ABaseModule {}
