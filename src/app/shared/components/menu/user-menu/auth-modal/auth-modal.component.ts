import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-auth-modal',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent {

  authForm: FormGroup;
  isLoginMode = true ;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AuthModalComponent>
  ) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    const { email, password } = this.authForm.value;
    console.log(email, password);

    this.closeModal();
  }


  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  closeModal() {
    this.dialogRef.close()
  }
}
