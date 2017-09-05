import { IUserData } from '../user/user-data.interface';

export interface ISession {
    userData:IUserData;
    authenticated:boolean;
    cookie:any;
    csrfSecret:string;
    token:string;
}