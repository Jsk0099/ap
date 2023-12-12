import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy{

  constructor(){

  }

  ngOnInit(){
    console.log('dashboard Loaded');
   
  }

  ngOnDestroy(){
    console.log('dashboard Destroy');
  }

  

}
