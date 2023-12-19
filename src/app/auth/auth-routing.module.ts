import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './pages/login-page/login.component'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
