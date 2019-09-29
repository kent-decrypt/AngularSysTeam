import { Team } from '../models/team';

export class Member {
    id : number;
    name : string;
    team : Team;
    isUpdate : boolean = false;
    isDelete : boolean = false;
}