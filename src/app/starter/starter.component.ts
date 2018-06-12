import { Component, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements AfterViewInit{
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 URL = 'http://192.168.100.7:9000/api/archivaldo';
 //URL = 'https://geradmin.herokuapp.com/api/archivaldo';

 public uploader:FileUploader = new FileUploader({url: this.URL});
    ngAfterViewInit(){}    
    public fileOverBase(e:any):void {
      this.hasBaseDropZoneOver = e;
    }
  
}
