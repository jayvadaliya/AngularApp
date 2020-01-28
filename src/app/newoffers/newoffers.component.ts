import { Component, OnInit } from '@angular/core';
import { animation, trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-newoffers',
  templateUrl: './newoffers.component.html',
  styleUrls: ['./newoffers.component.sass']
})
export class NewoffersComponent implements OnInit {
public upoffer = [
  {off : 30, coupon : 'Special26'},
  {off : 70, coupon : 'feb28'},
];
  constructor() { }

  ngOnInit() {
  }

}
