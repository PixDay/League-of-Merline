export class User {
    accountName: string;
    password: string;
    rememberMe: Boolean;

    constructor() {
        this.accountName = "";
        this.password = "";
        this.rememberMe = false;
    }
}