import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { OrderdetailsService } from 'src/app/service/orderdetails.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(public param:ActivatedRoute,public router:Router,
              private service:OrderdetailsService) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
     this.getMenuData();
  }

  getMenuData(){
    this.getMenuId=this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId){
      this.menuData=this.service.cakedetails.filter((value)=>{
        return value.id==this.getMenuId
      });
    }
  }

  onClickPayment(){
    this.router.navigateByUrl('/payments');
  }

  back(){
    this.router.navigateByUrl('/menu');
  }

}
