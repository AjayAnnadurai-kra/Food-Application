import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from 'src/app/service/orderdetails.service';
OrderdetailsService

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service: OrderdetailsService) { }
  cakedata: any;
  ngOnInit(): void {
    this.cakedata = this.service.cakedetails;
  }

}
