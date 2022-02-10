import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit, OnDestroy{
  constructor(){}
  
  secondes!:number;
  counterSubscription!:Subscription;

  ngOnInit(): void {

    // const counter = interval(1000).subscribe({
    //   next: this.secondes = value,
    //   error: console.log("Une erreur a été rencontrée"),
    //   complete: console.log("Observable complètée!")
    // });
    
      
    const counter = interval(1000)
    this.counterSubscription=counter.subscribe(
      (value:number) => {
        this.secondes = value;
      }
    );
  }

  ngOnDestroy(): void {
    // pour detruire la subscription qui etait sur un interval infinie
    this.counterSubscription.unsubscribe()
  }
}
