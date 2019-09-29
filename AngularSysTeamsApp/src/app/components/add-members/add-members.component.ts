import { Component, OnInit, ViewChild, } from '@angular/core';
import { Teams } from '../../data/teams';
import { Members, getNewId, defaultActions } from '../../data/members';
import { Member } from '../../models/member';
import { Team } from '../../models/team';

@Component({
  selector: 'app-add-members',
  templateUrl: './add-members.component.html',
  styleUrls: ['./add-members.component.css']
})
export class AddMembersComponent implements OnInit {
  @ViewChild('memberName') memberName : any;

  canAdd : boolean = false;
  _memberName : string = '';
  _memberTeam : number = null;
  _teams : any = Teams;

  constructor() { }

  ngOnInit() { }

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
              team : new Team(+this._memberTeam),
              ...defaultActions              
          };
          Members.push(member);
          memberName.value = '';
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
