import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.sass']
})
export class PagenotfoundComponent implements OnInit {
  public users = [];
  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getuser()
    .subscribe(data => this.users = data);
  }

}
