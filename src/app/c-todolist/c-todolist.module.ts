import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CTodolistComponent } from './c-todolist/c-todolist.component'
import { CTodolistHeaderComponent } from './c-todolist-header/c-todolist-header.component'
import { CTodolistBodyComponent } from './c-todolist-body/c-todolist-body.component'

@NgModule({
  declarations: [
    CTodolistComponent,
    CTodolistHeaderComponent,
    CTodolistBodyComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [CTodolistComponent],
})
export class CTodolistModule {}
