export class UserModel {
    // propriété typescript plus rapide a creer
    constructor(public firstName: string, 
        public lastName: string, 
        public email: string, 
        public drinkPreference: string, 
        // ?: permet de dire que c'est optionnel
        public hobbies?:string[]) {}
}