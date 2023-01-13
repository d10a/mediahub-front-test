import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsInterface } from 'src/app/interfaces/credentials.interface';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  credentials: CredentialsInterface = {
    username: 'Canal-plus',
    password: 'Super-secret',
  };

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    if (this.authService.userIsAuthenticate()) {
      this.router.navigateByUrl('/search')
    }
  }

  authenticateUser() {
    console.log(this.credentials)
    this.authService.authenticateUser(this.credentials)
      .subscribe((token) => {
        console.log(token)
        this.router.navigateByUrl('/search')
      })
  }
}
