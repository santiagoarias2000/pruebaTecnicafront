class CreateUser{
    public nameUser: string;
    public emailUser: string;
    public passwordUser: string;
    public typeUser: number;

    constructor(name: string, email: string, pass: string,type:number){
        this.nameUser = name;
        this.emailUser = email;
        this.passwordUser = pass;
        this.typeUser= type;
    }

}
export default CreateUser;