import { Component, Input, OnInit } from '@angular/core';
import { AppareilService} from "../services/appareil.service"

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss'],
})


export class AppareilComponent implements OnInit {
  @Input() appareilName!: string;
  @Input() appareilStatus!: string;
  @Input() indexOfAppareil!: number;

  // creation d'une variable qui appelle le composant AppareilService
  constructor(private appareilService :AppareilService) {}

  ngOnInit(): void {}

  getStatus(): string {
    return this.appareilStatus;
  }

  getColor(): string|any {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  // methodes utilisés dans html pour utliser la methode definie dans appareilService
  onSwitchOn(){
    this.appareilService.switchOnOne(this.indexOfAppareil)
  }
  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil)
  }
}
