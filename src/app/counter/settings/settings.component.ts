import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  @Output('dataToSend') dataToSend: EventEmitter<any> = new EventEmitter<any>();
  public configObj:any = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<SettingsComponent>,private localStorageService:LocalStorageService){ }

  ngOnInit(){
    console.log('modalData: ',this.data)
    this.configObj = this.data;
  }

  cancel(){
    this.dialogRef.close();
  };

  setMBtn(event:any){
    this.configObj.isManual = event.target.checked;
  };

  setDBtn(event:any){
    this.configObj.duration = event.target.value;
  };

  setTBtn(event:any){
    this.configObj.title = event.target.value;
  }

  save(){
    console.log('configObj: ',this.configObj);
    this.localStorageService.setData('configObj',JSON.stringify(this.configObj));
    this.dataToSend.emit(this.configObj);
    this.cancel();
    // this.localStorageService.setData('','');
  }
}
