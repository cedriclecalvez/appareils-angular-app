// composant service permettant de recuperer la data avec centralisation des données et ses fonctionnalités  

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  // get data here
  appareils=[
    {
      name:"Machine à laver",
      status:"éteint"
    },
    {
      name:"Télévision",
      status:"éteint"
    },
    {
      name:"Ordinateur",
      status:"allumé"
    }
   ]

  constructor() { }

  switchOnAll(){
    for(let appareil of this.appareils){
      appareil.status = "allumé"
    }
  }
  switchOffAll(){
    for(let appareil of this.appareils){
      appareil.status = "éteint"
    }
  }
  switchOnOne(index:number){
    this.appareils[index].status = "allumé"
    
  }
  switchOffOne(index:number){
    this.appareils[index].status = "éteint"
    
  }
}
