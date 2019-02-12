import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {VgAPI} from 'videogular2/core'


@Component({
  selector: 'app-videitos',
  templateUrl: './videitos.component.html',
  styleUrls: ['./videitos.component.css']
})
export class VideitosComponent implements OnInit {


  mostrarError:boolean=false;
  public form: FormGroup;
  ocultar=true;
  @ViewChild('videoPlayer') videoPlayer:any;


videourl="https://geducativoedi.com.mx/intro.mp4";

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

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      materia: [null , Validators.compose ( [ Validators.required ] )] ,
       bloque: [null , Validators.compose ( [ Validators.required ] )],
       curso: [null , Validators.compose ( [ Validators.required ] )], 
    } );
  }
onPlayerReady(api:VgAPI){

}
  onSubmit(){ 
    this.videourl="https://geducativoedi.com.mx/"+this.form.get("materia").value+"-"+
    this.form.get("bloque").value+"-"+this.form.get("curso").value+".mp4"
 this.ocultar=false;

 setTimeout(()=>{
this.videoPlayer.nativeElement.play();
 },1000)

console.log(this.videourl);

  }
}
