import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import User from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.scss']
})
export class ProfileManagementComponent implements OnInit {
  profileForm: FormGroup;
  updateError: boolean = false;
  updateSuccess: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<ProfileManagementComponent>,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.profileForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {

    // Populate the form with the current user's info
    // const currentUser = this.authService.getUserByUsername(this.authService.getLoggedInUsername());
    const currentUser = new User();
    this.profileForm.patchValue({
      username: currentUser.username,
      email: currentUser.email,
      password: currentUser.password,
    });
  }

  updateProfile(): void {
    if (this.profileForm.valid) {
      this.authService.updateProfile(this.profileForm.value).subscribe(
        (success: User) => {
          this.updateSuccess = true;
          this.updateError = false;
          setTimeout(() => {
            this.updateSuccess = false;
            this.dialogRef.close();
          }, 2000);
        },
        (error: any) => {
          this.updateError = true;
          this.updateSuccess = false;
          console.error(
            'ProfileManagementComponent.updateProfile(): update failed\n' +
            error
          );
        }
      );
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}

