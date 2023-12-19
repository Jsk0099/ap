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
    this.configObj.isManual = this.data.isManual;
  }

  cancel(){
    this.dialogRef.close();
  };

  setMBtn(event:any){
    this.configObj.isManual = event.target.checked;
    this.localStorageService.setData('isManual',event.target.checked);
  }

  save(){
    console.log('configObj: ',this.configObj)
    this.dataToSend.emit(this.configObj);
    this.cancel();
    // this.localStorageService.setData('','');
  }
}
