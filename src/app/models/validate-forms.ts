import { AbstractControl } from '@angular/forms'

export class ValidateForms {
  protected validateInput(input: AbstractControl<string | null, string | null>): boolean {
    return input.invalid && (input.touched || input.dirty)
  }
}
