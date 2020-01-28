import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offerdetails',
  templateUrl: './offerdetails.component.html',
  styleUrls: ['./offerdetails.component.sass']
})
export class OfferdetailsComponent implements OnInit {
  public details = [
    {off: 50, coupon: 'Offer50'},
    {off: 60, coupon: 'SundayFun'},
    {off: 20, coupon: 'Cool'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
