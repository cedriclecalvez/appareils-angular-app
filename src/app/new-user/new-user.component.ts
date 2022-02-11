import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm!: FormGroup;

  // l'outil formBuilder permet de creer de objet de type form plus simple et plus lisible
  constructor(private formBuilder: FormBuilder,private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // on initialise avec la methode 
    this.initForm();
  }

  initForm(){
    // methode qui retourne un form group
    this.userForm = this.formBuilder.group({
      // on ajoute les controles dans le formulaire
      // puis on ajoute des validators pour les champs
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      email : ['',[Validators.required, Validators.email]],
      drinkPreference : ['',Validators.required],
      hobbies: this.formBuilder.array([])
    })
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    const newUSER = new UserModel(
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['drinkPreference'],
      formValue['hobbies']? formValue['hobbies'] : []
    )    
    this.userService.addUser(newUSER);
    this.router.navigate(['/users'])
  }

  getHobbies() {
    return this.userForm.get('hobbies') as FormArray;

  }
  onAddHobby(){
    const newHobbyControl = this.formBuilder.control('',Validators.required)
    this.getHobbies().push(newHobbyControl)
  }

}
