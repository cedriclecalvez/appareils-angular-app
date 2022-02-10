import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  name: string | undefined='Appareil';
  status: string | undefined="Status";

  constructor(private appareilService: AppareilService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    // au chargement de la page je recupere l'id pour injecter le nom et le status de l'appareil
    // le + va cast le string en number
    this.name = this.appareilService.getAppareilById(+id)?.name
    this.status = this.appareilService.getAppareilById(+id)?.status
  }

}
