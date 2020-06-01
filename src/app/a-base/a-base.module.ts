import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ABaseComponent } from './a-base/a-base.component'
import { BaseComponent } from './base/base.component';
import { BaseCComponent } from './base-c/base-c.component'

@NgModule({
  declarations: [BaseComponent, ABaseComponent, BaseCComponent],
  imports: [CommonModule],
  exports: [BaseComponent, ABaseComponent, BaseCComponent],
})
export class ABaseModule {}
