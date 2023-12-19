import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/shared/services/common.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  title = 'Jay Shree Krishna';
  isTouchDevice = false;
  counter = 0;
  isResume = false;
  isManual = false;

  constructor(private localStorageService:LocalStorageService, private common:CommonService, private dialog:MatDialog){  }

  ngOnInit(){
    this.localStorageService.getData('title') ? (this.title = this.localStorageService.getData('title') as string) : '' ; 
    this.isTouchDevice = this.common.isTouchDevice();
    this.isManual = this.localStorageService.getData('isManual') ? true : false;
    if(this.localStorageService.getData('counter')){
      this.counter = parseInt(this.localStorageService.getData('counter') as string);
      this.isResume = true;
    }
  }

  validateInput(event:any){
    if(event.keyCode == 13){
      return false;
    }else{
      return true;
    }
  }

  onTitleChange(event: any): void {
    if(event.target.innerText.length>0 && event.target.innerText.length <= 50){
      this.title = event.target.innerText;
      this.localStorageService.setData('title',this.title);
    }else{
      this.title = this.localStorageService.getData('title') as string;
      alert('Please Enter Valid Title');
    };
  };

  resumeCounter(){
    event?.stopPropagation();
    event?.preventDefault();
    this.counter = parseInt(this.localStorageService.getData('counter') as string);
  }

  saveCounter(){
    event?.stopPropagation();
    event?.preventDefault();
    this.localStorageService.setData('counter',this.counter);
    this.isResume = true;
  }

  increment(){
    this.counter++;
  };

  openSettingModal(){
    let ref = this.dialog.open(SettingsComponent,{
      panelClass:'dialog-panel',
      disableClose: true,
      autoFocus: false,
      data:{ isManual:this.isManual}
    });

    ref.componentInstance.dataToSend.subscribe((data)=>{
      console.warn(data);
      this.isManual = data.isManual;
    })
  }


}
