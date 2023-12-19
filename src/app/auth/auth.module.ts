import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LoginPageComponent } from './pages/login-page/login.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class AuthModule {}
