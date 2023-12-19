import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LoginPageComponent } from './auth/pages/login-page/login.component'

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },

  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
