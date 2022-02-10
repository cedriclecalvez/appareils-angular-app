import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus:boolean = false;

  // injecter afin d'utiliser les method key du service correspondant
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth
  }

  onSignIn(){
    this.authService.signIn().then(() => {
      console.log("connexion réussie!");
      this.router.navigate(['/appareils']);
      // puis réinitialiser le status grace au status initial dans le service
      this.authStatus = this.authService.isAuth      
    })
  }
  onSignOut(){
    this.authService.signOut()
    console.log("Déconnexion réussie!");
    this.authStatus = this.authService.isAuth      
    
  }

}
