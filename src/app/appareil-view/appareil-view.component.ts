import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})

// implements OnInit permet d'utiliser le ngOnInit juste apres la constrution du composant

export class AppareilViewComponent implements OnInit {

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
  appareils!: any[];
  // pour authoriser la subscription
  appareilSubscription!: Subscription;
  
  // declaration variable appareilService venant de AppareilService
  constructor(private appareilService: AppareilService) {
    setTimeout(() => (this.isAuth = true)), 4000;
  }

  ngOnInit() {
    // introduction de la data dans le tableau vide appareils
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      //la fonction "next" qui introduit
      (appareils:any[])=>{
        this.appareils=appareils}
    )
    // on appelle la methode située dans appareilService
    this.appareilService.emitAppareilSubject()
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
