import { User } from './../../models/User';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: User[];
  selectedUser?: User;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  }

  setSelectedUser(selectedUser: User) {
    this.selectedUser = selectedUser;
  }

}
