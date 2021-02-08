import { UserService } from './../../service/user.service';
import { User } from './../../models/User';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user!: User;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
