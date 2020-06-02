import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BParentComponent } from './b-parent/b-parent.component'
import { BChildComponent } from './b-child/b-child.component'

@NgModule({
  declarations: [BParentComponent, BChildComponent],
  imports: [CommonModule],
  exports: [BParentComponent],
})
export class BParentChildComponentPassValuesModule {}
