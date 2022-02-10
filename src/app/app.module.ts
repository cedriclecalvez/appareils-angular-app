import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGardService } from './services/auth-gard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

const appRoutes:Routes = [
  { path: '', component: AppareilViewComponent},
  { path: 'auth', component: AuthComponent},
  // can activate permet de limiter l'acces au appareil grace au service auth-gard
  { path: 'appareils', canActivate:[AuthGardService], component: AppareilViewComponent},
  { path: 'appareils/:id', canActivate:[AuthGardService], component: SingleAppareilComponent},
  { path: 'edit', canActivate:[AuthGardService], component: EditAppareilComponent},
  { path: 'not-found', component: FourOhFourComponent},
  // ** doit etre a la fin
  { path: '**', redirectTo: '/not-found'},
]

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) //permet de dire a Angular que toutes les routes se trouvent dans appRoutes
  ],
  // mettre les services dans providers
  providers: [
    AppareilService,
    AuthService,
    AuthGardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

