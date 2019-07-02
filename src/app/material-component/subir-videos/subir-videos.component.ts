import { Component, OnInit, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { FileUploader, FileUploaderOptions } from 'ng2-file-upload';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-subir-videos',
  templateUrl: './subir-videos.component.html',
  styleUrls: ['./subir-videos.component.css']
})
export class SubirVideosComponent implements AfterViewInit{
  public hasBaseDropZoneOver:boolean = false;
  public materia:string="yooo";
  public bloque:string="tuuu";
  public curso:string="eeeel";
  public hasAnotherDropZoneOver:boolean = false;
 //URL = 'http://192.168.100.7:9000/api/archivaldo';
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
  {value: 'excel', viewValue: 'Excel'},
  {value: 'word', viewValue: 'Word'},
  {value: 'internet', viewValue: 'Internet'},
  {value: 'power', viewValue: 'Power Point'},
  {value: 'programacion', viewValue: 'Programación'},
  {value: 'scracht', viewValue: 'Introducción a scratch'}
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
    
    
    cursoSeleccionado(event:any){
      console.log("Seleccionaste algo "+event.value);
      if(event.value=='info3'){
        this.cursos = [
          {value: 'excel', viewValue: 'Excel'},
          {value: 'word', viewValue: 'Word'},
    
          {value: 'programacion', viewValue: 'Programación'},
          {value: 'scracht', viewValue: 'Programación Scratch'}
        ];
      }
      if(event.value=='info2'){
        this.cursos = [
          {value: 'internet', viewValue: 'Internet'},
          {value: 'word', viewValue: 'Word'},
    
          {value: 'excel', viewValue: 'Excel'},
          {value: 'power', viewValue: 'Power Point'}
        ];
      }
      if(event.value=='info4'){
        this.cursos = [
          {value: 'word', viewValue: 'Word'},
          {value: 'excel', viewValue: 'Excel'},
    
          {value: 'programacion', viewValue: 'Programación'},
          {value: 'app-inventor', viewValue: 'App Inventor'}
        ];
      }
      
      if(event.value=='info1'){
        this.cursos = [
          {value: 'excel', viewValue: 'Excel'},
          {value: 'word', viewValue: 'Word'},
          {value: 'internet', viewValue: 'Internet'},
          {value: 'power', viewValue: 'Power Point'},
          {value: 'programacion', viewValue: 'Programación'}
        ];
      
      }
      
    }

    public fileOverBase(e:any):void {
      this.hasBaseDropZoneOver = e;
    }
    onFileSelected(){
      
console.log("asas")
    }

   

    public onChange($event:any):void {

      /*
      Con el siguiente codigo podmeos actualizar el form de submicion para que
      acepte el otro prametroa adicional al del file y que llegue al servidor tambien
      y cambien dinamicamente
      *
      this.uploader.onBuildItemForm=(fileItem: any, form: any) => {
        form.append('materia' , this.materia);
        form.append('bloque' , this.bloque);
        form.append('curso' , this.curso);
      
       };
       */
  
      console.log("Se ha seleccionado el archivo  y nombre "+this.materia);
      console.log("url "+this.URL);
    //console.log("yayayayaya"+$event.srcElement.files[0].name);

    }
}
