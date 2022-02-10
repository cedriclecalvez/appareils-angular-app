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

const appRoutes:Routes = [
  { path: 'appareils', component:AppareilViewComponent},
  { path: 'auth', component:AuthComponent},
  { path: '', component:AppareilViewComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

