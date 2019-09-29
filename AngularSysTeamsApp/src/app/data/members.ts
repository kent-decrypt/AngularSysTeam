import { Member } from '../models/member';
import { Team } from '../models/team';

export const defaultActions = {
    isUpdate : false,
    isDelete : false,
}

export const Members: Member[] = [
    { id : 1, name : 'Bea', team: new Team(1), ...defaultActions },
    { id : 2, name : 'Von', team: new Team(1), ...defaultActions },
    { id : 3, name : 'Kent', team: new Team(1), ...defaultActions },
    { id : 4, name : 'Chelsea', team: new Team(1), ...defaultActions },
];

export function getNewId() {
    const ids = Members.map(member => member.id);
    return Math.max(...ids) + 1;
}