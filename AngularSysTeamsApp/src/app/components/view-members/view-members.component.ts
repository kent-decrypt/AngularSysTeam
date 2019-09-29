import { Component, OnInit, ViewChild } from '@angular/core';
import { Members } from '../../data/members';
import { Teams } from '../../data/teams';
import { Team } from '../../models/team';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.css']
})
export class ViewMembersComponent implements OnInit {

  _members = Members;
  _isUpdate : boolean = false;
  _isDelete : boolean = false;
  _teams : any = Teams;
  _editCache : any = [];

  constructor() { }

  ngOnInit() { }

  toggleDelete(id:number) {
    let user = this._members.find(i => i.id === id);
    user.isDelete = !user.isDelete;
  }

  removeMember(id:number) {
    const users = this._members.filter(i => i.id !== id);
    this._members = users;
  }

  toggleUpdate(id:any) {
    let user = this._members.find(i => i.id === id);
    const cacheIds = this._editCache.map(i => i.id);

    if(!user.isUpdate && !cacheIds.includes(user.id)) {
        this._editCache.push(user);
    }
    user.isUpdate = !user.isUpdate;
  }

  saveUpdate(id : number) {
    try {
      const newUser = this._editCache.find(i => i.id === id);
      let oldUser = this._members.find(i => i.id === id);
      
      oldUser.name = newUser.tempName || newUser.name;
      oldUser.team = newUser.tempTeam || newUser.team;

      console.log(`Successfully updated to ${newUser}!`);
    }
    catch(error) {
      console.log(`Error handled, ${error}`);
    }
    finally {
      this.toggleUpdate(id);
    }
  }

  editMember(e:any, id : number) {
    const newName = e.target.value;

    let user = this._editCache.find(i => i.id === id);
    user.tempName = newName;
  }

  changeTeam(e:any, id : number) {
    const newTeam = +e.target.value;

    let user = this._editCache.find(i => i.id === id);
    user.tempTeam = new Team(newTeam);
  }

}
