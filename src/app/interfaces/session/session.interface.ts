import { IUserData } from '../user/user-data.interface';

export interface ISession {
    User:IUserData;
    authenticated:boolean;
    cookie:any;
    csrfSecret:string;
    token:string;
}