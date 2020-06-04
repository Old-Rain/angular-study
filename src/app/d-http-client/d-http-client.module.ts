import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { DHttpClientComponent } from './d-http-client/d-http-client.component'

@NgModule({
  declarations: [DHttpClientComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [],
  exports: [DHttpClientComponent],
})
export class DHttpClientModule {}
