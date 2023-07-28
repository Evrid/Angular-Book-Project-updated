import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service'; 



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string | null = null; // Add loginError property

  constructor(private authService: AuthService, private router: Router) { }

  goHome() {
    this.router.navigateByUrl('');
  }

 


  onSubmit(): void {
    this.authService.login(this.username, this.password)
      .subscribe({
        next: (response) => {
          const token = response.token; // Assuming the token is returned in the "token" property of the response
          this.authService.saveToken(token);
          // Handle successful login (navigate to a new page, display a success message, etc.)
          console.log("login success!");
          this.router.navigate(['']);  //Navigate back to home
    //      this.router.navigate(['/Quotes']);
        },
        error: (error) => {
          // Handle login error (display error message, etc.)
          console.log("wrong username or password");
          this.loginError = "Fel användarnamn eller lösenord"; // Set the error message
        }
      });
  }
  
}