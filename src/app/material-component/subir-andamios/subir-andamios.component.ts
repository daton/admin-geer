
import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
import {MatSelectModule} from '@angular/material/select';



@Component({
  selector: 'app-subir-andamios',
  templateUrl: './subir-andamios.component.html',
  styleUrls: ['./subir-andamios.component.css']
})
export class SubirAndamiosComponent implements AfterViewInit{
  public hasBaseDropZoneOver:boolean = false;
  public materia:string="yooo";
  public bloque:string="tuuu";
  public curso:string="eeeel";
  public hasAnotherDropZoneOver:boolean = false;
 //URL = 'http://192.168.100.7:8080/api/archivaldo';
 URL = 'https://daton.herokuapp.com/api/archivaldo';

 public uploader:FileUploader = new FileUploader({url: this.URL});

 materias = [
  {value: 'info1', viewValue: 'Informática 1'},
  {value: 'info2', viewValue: 'Informática 2'},
  {value: 'info3', viewValue: 'Informática 3'},
  {value: 'info4', viewValue: 'Informática 4'},

];
bloques = [
  {value: 'bloque1', viewValue: 'Bloque 1'},
  {value: 'bloque2', viewValue: 'Bloque 2'},
  {value: 'bloque3', viewValue: 'Bloque 3'},

];
cursos = [
  {value: 'profesor', viewValue: 'Profesor'},
  {value: 'alumno', viewValue: 'Alumno'},

];
 public constructor(){
 
 }
    ngAfterViewInit(){


      this.uploader.onBuildItemForm=(fileItem: any, form: any) => {
        form.append('materia' , this.materia);
        form.append('bloque' , this.bloque);
        form.append('curso' , this.curso);
      
       };
  

    }    
    public fileOverBase(e:any):void {
      this.hasBaseDropZoneOver = e;
    }
    onFileSelected(){

      this.materias = [
        {value: 'info1', viewValue: 'Informática 1'},
        {value: 'info2', viewValue: 'Informática 2'},
        {value: 'info3', viewValue: 'Informática 3'},
        {value: 'info4', viewValue: 'Informática 4'},
      
      ];
      this.bloques = [
        {value: 'bloque1', viewValue: 'Bloque 1'},
        {value: 'bloque2', viewValue: 'Bloque 2'},
        {value: 'bloque3', viewValue: 'Bloque 3'},
      
      ];
      this.cursos = [
        {value: 'profesor', viewValue: 'Profesor'},
        {value: 'alumno', viewValue: 'Alumno'},
      
      ];
      
console.log("seleccionado")



    }

   

    public onChange($event:any):void {

    
      this.uploader.onBuildItemForm=(fileItem: any, form: any) => {
        form.append('materia' , this.materia);
        form.append('bloque' , this.bloque);
        form.append('curso' , this.curso);
      
       };
       
  
      console.log("Si ha seleccionado el archivo  y nombre "+this.materia);
      console.log("url "+this.URL);
    //console.log("yayayayaya"+$event.srcElement.files[0].name);

    }
}
