import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: [''],
      username: [''],
      email: [''],
      password: ['']
    });
  }

  registerUser() {
    this.authService.signUp(this.signupForm.value).subscribe((res) => {
      if (res.success) {
        this.signupForm.reset()
        this.router.navigate(['log-in']);
      }
    })
  }

}
