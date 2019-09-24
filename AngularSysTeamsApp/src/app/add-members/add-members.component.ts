import { Component, OnInit } from '@angular/core';
import { Teams } from '../teams';
import { Members, getNewId } from '../members';
import { Member } from '../../models/member';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {

  canAdd = false;
  _memberName = '';
  _memberTeam = null;
  _teams = Teams;

  constructor() { }

  ngOnInit() {
  }

  toggleFlag() {
      this.canAdd = !this.canAdd;
  }

  editMemberName(e: any) {
      this._memberName = e.target.value;
  }

  addMember() {
      if(this._memberName == '' || this._memberTeam == null) return console.log(`Invalid Member Name : ${this._memberName}, or Team : ${this._memberTeam}`);
      try {
          const member : Member = {
              id : getNewId(),
              name : this._memberName,
              team : this._memberTeam
          };
          Members.push(member);
          console.log(`Added ${this._memberName} with team ${this._memberTeam}!`);
      }
      catch(e) {
          console.log(`Error handled. ${e}`);
      }
  }

  changeTeam(e : any) {
      this._memberTeam = e.target.value;
  }

}
