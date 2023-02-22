

class User {
    public _id: string;
    public nameUser: string;
    public emailUser: string;
    public passwordUser: string;
    public typeUser: number;
  
    constructor( id: string, nom: string, cor: string, cla: string, type: number) {
      this._id = id;
      this.nameUser = nom;
      this.emailUser = cor;
      this.passwordUser = cla;
      this.typeUser = type;

    }
  }
  
  export default User;