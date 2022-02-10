import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss'],
})
export class EditAppareilComponent implements OnInit {
  // afin de ne pas laisser le champs vide dans le form de type select on fait passer une valeur par default
  defaultOnOff: string = 'éteint';

  // ne pas oublier d'importer le service et le router
  constructor(
    private appareilService: AppareilService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    // console.log('form.value===>', form.value);

    // on récupere les valeurs du form
    const name = form.value.name;
    const status = form.value.status;

    // on utilise le service et sa methode addAppareil en reprenant les valeurs name et status pour les qui sont les parametres
    this.appareilService.addAppareil(name, status);
    // on redirect vers une autre page
    this.router.navigate(['/appareils']);
  }
}
