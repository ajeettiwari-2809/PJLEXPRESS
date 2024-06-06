import { HttpClient } from '@angular/common/http';
import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService, Overlay } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-sales-module',
  templateUrl: './sales-module.component.html',
  styleUrls: ['./sales-module.component.css']
})
export class SalesModuleComponent {

  constructor(private http: HttpClient, private router: Router, private ngZone: NgZone,private toastr: ToastrService,private overlay: Overlay) { }
  saleslist:any=[];
  invoiceList:any=[];

 

  samelistforall:any=[];


  ngOnInit() {
    this.saleslist=[];
    this.invoiceList=[];
    this.samelistforall=[];

    this.isSalesListData();
    this.selectList(0);
  }


  searchKeyWord: string = '';
  isSalesListData()
  {

    this.saleslist=[{'id':1,'name':'Customers Creation', 'view':30, 'download':20},
    {'id':2,'name':'Customers Updations', 'view':30, 'download':20},
    {'id':3,'name':'Customers Deletaions', 'view':30, 'download':20},
    {'id':4,'name':'Customers Creation', 'view':30, 'download':20},
    {'id':5,'name':'Customers Creation', 'view':30, 'download':20},
    {'id':6,'name':'Customers Creation', 'view':30, 'download':20},
    {'id':7,'name':'Customers Creation', 'view':30, 'download':20},
    {'id':8,'name':'Customers Creation', 'view':30, 'download':20},{'id':9,'name':'Customers Creation', 'view':30, 'download':20}
    ];


    this.invoiceList=[{'id':1,'name':'Invoice Creation', 'view':30, 'download':20},
    {'id':2,'name':'Invoice Updations', 'view':30, 'download':20},
    {'id':3,'name':'Invoice Not Generated', 'view':30, 'download':20},
    {'id':4,'name':'Invoice Print Errors', 'view':30, 'download':20},
    {'id':5,'name':'Invoice Wrong GsT Values', 'view':30, 'download':20},
   
    ];


  }

  selectList(status:any)
  {
    console.log("methi call " + status);
    if(status==0)
      {
this.samelistforall=this.saleslist;
      }
      else if(status==1)
       {
        this.samelistforall=this.invoiceList;
       }
  }

  playVedio()
  {
    this.router.navigate(['/playvedios']);

    

  }
  openDocument()
  {
    window.open('https://www.youtube.com/watch?v=uqNLvT65L-Y', '_blank')
  }

}
