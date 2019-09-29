import { Component, OnInit } from '@angular/core';
import { Members } from '../../data/members';
import { Teams } from '../../data/teams';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrls: ['./view-members.component.css']
})
export class ViewMembersComponent implements OnInit {

  _members = Members;

  constructor() { }

  ngOnInit() { }

}
