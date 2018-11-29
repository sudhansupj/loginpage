import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
 
  name = "asdfrewq";


  constructor(private user:UserService ){}

  ngOnInit() {
    this.name = this.user.username;
    console.log('is user logged in', this.user.getUserLogedIn())
  }

}
