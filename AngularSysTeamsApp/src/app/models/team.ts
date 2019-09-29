import { Teams } from '../data/teams';

export class Team {
    id: number;
    name : string;

    constructor(id:number) {
        this.id = id;
        this.name = this.teamName();
    }

    private _listOfTeams = Teams;

    teamName() : string {
        return this._listOfTeams.find((i:any) => i.id === this.id).name;
    }
}