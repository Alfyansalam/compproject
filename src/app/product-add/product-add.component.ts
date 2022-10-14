import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  constructor() { }
  title = 'first_project';
  list:any[]=[];
  listd:any[]=[];
  
  EnterSubmit(item:String,bo:any,date:any)
    {
      
      if(item!="")
 this.list.push({item});
 this.listd.push({date});
bo.value=""
 
}
  remove(i:number)
  {
this.list.splice(i,1);
this.listd.splice(i,1);
  } 


  ngOnInit(): void {
  }

}
