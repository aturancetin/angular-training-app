import { User } from './../../models/User';
import { UserService } from './../../service/user.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-selected-user',
  templateUrl: './selected-user.component.html',
  styleUrls: ['./selected-user.component.css']
})
export class SelectedUserComponent implements OnInit {

  @Input() user?: User;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
