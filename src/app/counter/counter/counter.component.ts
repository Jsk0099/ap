import { Component,ElementRef,OnDestroy,OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/shared/services/common.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {

  title:string;
  isTouchDevice = false;
  counter = 0;
  timeOut:any;
  isFullScreen = false;
  isResume = false;
  configData: any = {};

  constructor(private localStorageService:LocalStorageService, private common:CommonService, private dialog:MatDialog){ 
    this.isTouchDevice = this.common.isTouchDevice();
    this.configData = this.localStorageService.getData('configObj') ? JSON.parse(this.localStorageService.getData('configObj') as string) : {} ;
    this.title = this.configData.title || 'Jay Shree Krishna';
    if(this.localStorageService.getData('counter')){
      this.counter = parseInt(this.localStorageService.getData('counter') as string);
      this.isResume = true;
    }
   }

  ngOnInit(){
 
  }

  toggleFullScreen(){
    if(document.fullscreenElement){
      document.exitFullscreen();
      this.isFullScreen = false;
    } else {
      document.getElementById('fullscreen-ele')?.requestFullscreen();
      this.isFullScreen = true;
    }
  }

  ngOnDestroy(){
    this.timeOut && clearTimeout(this.timeOut);
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
      this.localStorageService.setData('title',event.target.innerText);
    }else{
      document.getElementById('title')!.innerHTML = this.title;
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

  resetCounter(){
    event?.stopPropagation(); 
    event?.preventDefault();
    this.counter = 0;
    this.isResume = false;
    this.localStorageService.setData('counter',this.counter);
  }

  increment(){
    if(!this.configData.isManual){
      this.timeOut && clearTimeout(this.timeOut);
      this.timeOut = setTimeout(this.saveCounter.bind(this), this.configData.duration ? this.configData.duration*1000 : 1000);
    }
    this.counter++;
    if(this.configData.goal > 0 && this.configData.goal == this.counter){
      if(this.configData.isVibrate && navigator.vibrate){
        navigator.vibrate(200);
      }
      if(this.configData.isAudio){
        let audio = new Audio('assets/audios/bell.mp3');
        audio.play();
      }
    }
  };

  openSettingModal(){
    let ref = this.dialog.open(SettingsComponent,{
      panelClass:'dialog-panel',
      disableClose: true,
      autoFocus: false,
      data:this.configData
    });

    ref.componentInstance.dataToSend.subscribe((data)=>{
      this.configData = data;
    })
  }


}
