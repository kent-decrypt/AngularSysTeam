import { Member } from '../models/member';
import { Team } from '../models/team';

export const Members: Member[] = [
    { id : 1, name : 'Bea', team: new Team() },
    { id : 2, name : 'Von', team: new Team() },
    { id : 3, name : 'Kent', team: new Team() },
    { id : 4, name : 'Chelsea', team: new Team() },
]

export function getNewId() {
    const ids = Members.map(member => member.id);
    return Math.max(...ids) + 1;
}