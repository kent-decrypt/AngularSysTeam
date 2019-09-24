import { Component, OnInit } from '@angular/core';
import { Members } from '../members';
import { Teams } from '../teams';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.css']
})
export class ViewMembersComponent implements OnInit {

  _members = Members;

  constructor() { }

  ngOnInit() {
  }

  initMembers() {
    let members = Members;
    let teams = Teams;

    return members.map(member => {
      // const teamName = teams.find(team => team.id === member.team).name;
      // return {...member, teamName};
    });
  }

}
