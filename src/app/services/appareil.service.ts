// composant service permettant de recuperer la data avec centralisation des données et ses fonctionnalités

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppareilService {
  // pour creer la methode subject aui permette l'acces a appareils
  appareilSubject = new Subject<any[]>();

  // simulate get data here
  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint',
    },
    {
      id: 2,
      name: 'Télévision',
      status: 'éteint',
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'allumé',
    },
  ];

  constructor() {}

  // methode qui permet l'acces a appareils en creant une copie du tableau et le forcant avec next
  emitAppareilSubject() {
    this.appareilSubject.next(this.appareils.slice());
  }

  getAppareilById(id: number) {
    const appareil = this.appareils.find((appareilObject) => {
      return appareilObject.id === id;
    });
    return appareil;
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }
  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
    this.emitAppareilSubject();
  }
  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
    this.emitAppareilSubject();
  }

  addAppareil(name: string, status: string){
    const appareilObject = {
      id:0,
      name:"",
      status:""
    }
    
    // je créé le nouvel appareil avec la data du form passée en parametre
    appareilObject.name= name;
    appareilObject.status=status;
    appareilObject.id=this.appareils[this.appareils.length - 1].id+1;

    this.appareils.push(appareilObject);
    // je renvoie le nouveau tableau avec le new appareil dedans
    this.emitAppareilSubject()
    
  }
}
