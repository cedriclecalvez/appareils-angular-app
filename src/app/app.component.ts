import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

// implements OnInit permet d'utiliser le ngOnInit juste apres la constrution du composant
export class AppComponent implements OnInit {
  isAuth = false;
  // fonction promise pour tester le pipe async coté html, demander d'attendre lastdate avant de l'afficher 
  lastUpdate = new Promise<Date>((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }),
      2000;
  });

  // initialize data array
  appareils: any = [];
  
  // declaration variable appareilService venant de AppareilService
  constructor(private appareilService: AppareilService) {
    setTimeout(() => (this.isAuth = true)), 4000;
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
  onAllumer() {
    console.log('on allume tout');
    this.appareilService.switchOnAll()
  }
  onEteindre() {
    console.log('on éteint tout');
    this.appareilService.switchOffAll()

  }
}
