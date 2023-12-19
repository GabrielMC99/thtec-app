import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LoginPageComponent } from './pages/login-page/login.component'

import { AuthRoutingModule } from './auth-routing.module'

@NgModule({
  declarations: [LoginPageComponent],
  imports: [AuthRoutingModule, CommonModule]
})
export class AuthModule {}
