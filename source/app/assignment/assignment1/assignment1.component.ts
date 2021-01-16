import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'ngr-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  users: User[] = [
    {
      name: 'Arpit',
      username: 'u.arpit',
      email: 'arpit@gmail.com'
    },
    {
      name: 'Nishi Upadhyay',
      username: 'nishi',
      email: 'nishiu@gmail.com'
    },
    {
      name: 'Mohit',
      username: 'maxmohit',
      email: 'mohit@gmail.com'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteUser(userIndex: number) {
    this.users.splice(userIndex, 1)
  }

}
