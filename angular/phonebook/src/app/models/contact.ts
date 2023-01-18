export class Contact {
    id: number = 0;
    firstname: string = "";
    lastname: string = "";
    gender: string = "";
    dob: string = "";
    email?: string;
    phone?: string;
    city?: string;
    state?: string;
    country?: string;
    picture?: string = '../../assets/images/img1.webp';

    constructor(id: number, firstname: string,
        lastname:string, dob: string, gender: string, email:string, phone:string,
        city:string, state:string, country:string,picture:string) {
          this.id = id;
          this.firstname = firstname;
          this.lastname = lastname;
          this.dob = dob;
          this.city = city;
          this.gender = gender;
          this.email = email;
          this.phone = phone;
          this.state = state;
          this.country = country;
          this.picture=picture;
         }
}
 