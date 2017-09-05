export interface IUserNew {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmation: string;
    invitationCode: string;
    _csrf: string;
}