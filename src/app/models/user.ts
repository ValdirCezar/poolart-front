export interface User {
   id?:              any;
   name:             string;
   cpf:              string;
   phone:            string;
   email:            string;
   password:         string;
   about?:           string;
   profiles?:        any;
   age?:             number;
   numberOfReviews?: number;
   rating?:          number;
   sumOfReviews?:    number;
}

export class Address {
   id?:     any;
   cep:     string;
   country: string;
   city:    string;
   street:  string;
   number:  string;
}

export class Artist implements User {
   id?:              any;
   name:             string;
   cpf:              string;
   phone:            string;
   email:            string;
   password:         string;
   about?:           string;
   profiles?:        any;
   age?:             number;
   numberOfReviews?: number;
   rating?:          number;
   sumOfReviews?:    number;
   address?:          Address;
}
