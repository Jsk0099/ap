import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navigationList:any;  
  
  constructor(private router:Router){ }

  ngOnInit(){
    this.navigationList = [
      {displayName:'Dashboard',path:'dashboard'},
      {displayName:'Multiple Iframes',path:'multiple-iframe'},
    ]
  }

  navigate(path:string){
    this.router.navigate([`${path}`]);
  }

}
