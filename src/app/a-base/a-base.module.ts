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
