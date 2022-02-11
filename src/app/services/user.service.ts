import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserModel } from '../models/User.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  
  // type importé de UserModel
  // juste pour montrer que ca marche on simuler
  private users: UserModel[] = [
    { 
      firstName: 'cedric',
      lastName: 'le calvez',
      email: 'cedric@example.com',
      drinkPreference: 'Coca-cola',
      hobbies: [
        'coder',
        'la dégustation de café'
      ]
    }
  ];
  // nouveau pattern permettant d'emettre des subjects de type modelUser
  userSubject = new Subject<UserModel[]>();

  constructor() { }

  // appeler userSubject et use la methode next pour forcer le push d'une copie de tableau
  emitUserSubject(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: UserModel){
    // prend le user du form et le push dans le array
    this.users.push(user);
    // renvoie du tableau de users
    this.emitUserSubject();
  }
}
