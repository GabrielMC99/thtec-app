import { Component } from '@angular/core'
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'

import { ValidateForms } from '../../../models/validate-forms'

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginPageComponent extends ValidateForms {
  public loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  constructor(private formBuilder: FormBuilder) {
    super()
  }

  public onSubmit(): void {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched()

      return
    }

    console.log(this.loginForm.value)
  }
}
