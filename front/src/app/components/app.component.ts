import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';

  constructor(private authService: AuthService, private router: Router) {

  }

  logout(): void {
    this.authService.removeUserToken()
      .subscribe(() => this.router.navigateByUrl('auth'))
  }
}
