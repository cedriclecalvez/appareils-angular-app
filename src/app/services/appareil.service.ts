// composant service permettant de recuperer la data avec centralisation des données et ses fonctionnalités

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppareilService {
  // simulate get data here
  appareils = [
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

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilObject) => {
        return appareilObject.id === id}
    );
    return appareil;
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }
  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }
  switchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }
  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
