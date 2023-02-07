export class User{
    constructor(public id : number, 
        public name:string, 
        public lastName1:string, 
        public lastName2:string, 
        public birthday:Date, 
        public province:string, 
        public canton:string, 
        public address:string, 
        public phoneNumber:number, 
        public email:string, 
        public password:string, 
        public status:number, 
        public role:string, 
        public registrationDate: Date){

    }
}