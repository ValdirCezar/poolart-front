export interface User {
   id?:         any;
   name:     string;
   cpf:      string;
   phone:    string;
   email:    string;
   password: string;
   about?:   string;
   age?:     any;
}

export class Artist implements User {
   id?: any;
   name: string;
   cpf: string;
   phone: string;
   email: string;
   password: string;
   about?: string;
   age?: any;
}