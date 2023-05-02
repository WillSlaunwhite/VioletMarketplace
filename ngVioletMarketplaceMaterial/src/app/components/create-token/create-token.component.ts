import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Token from 'src/app/models/token';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-create-token',
  templateUrl: './create-token.component.html',
  styleUrls: ['./create-token.component.scss']
})
export class CreateTokenComponent implements OnInit {
  tokenForm: FormGroup;
  isLoading = false;
  tokenToCreate: Token = new Token();


  constructor(
    private formBuilder: FormBuilder,
    private tokenService: TokenService,
    private snackBar: MatSnackBar
    ) {
      this.tokenForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.tokenForm.invalid) {
      return;
    }

    this.isLoading = true;
    const { name, description } = this.tokenForm.value;
    this.tokenService.createToken(this.tokenToCreate).subscribe(
      () => {
        this.isLoading = false;
        this.snackBar.open('Token created successfully', 'Close', { duration: 3000 });
        this.tokenForm.reset();
      },
      (error) => {
        this.isLoading = false;
        this.snackBar.open(`Error: ${error.message}`, 'Close', { duration: 3000 });
      }
    );
  }
}
