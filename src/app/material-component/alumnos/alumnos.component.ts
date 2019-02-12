import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Profesor } from '../../modelo/profesor';

import { Globales } from '../../modelo/globales';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../../modelo/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  displayedColumns = ['clave', 'email', 'nombre', 'paterno'];
  dataSource: MatTableDataSource<Profesor>;
  dataSourceAlumnos:MatTableDataSource<Alumno>;
   users: Profesor[] = [];
   usersAlumnos:Alumno[]=[];
   claveProfesor=''

   mostrarProfesores=true
   mostrarGrupos=false
color='blue'
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;




 

  constructor(public http:HttpClient) {

    this.mostrarProfesores=true
    this.mostrarGrupos=false

    let estaUrl: string = Globales.urlBase + "/profesor";
    console.log("La es esta  url" + estaUrl);
    this.http.get<any[]>(estaUrl).subscribe(respuesta => { this.users = respuesta });
    this.dataSource = new MatTableDataSource(this.users);
   


   // this.rows = data;
   // this.temp = [...data];
    setTimeout(() => {
         // Assign the data to the data source for the table to render
         this.dataSource = new MatTableDataSource(this.users);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;

    }, 1500);
  

   }

  
  ngOnInit() {

  }
  ngAfterViewInit() {
   // this.dataSource.paginator = this.paginator;
  //  this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if(this.dataSourceAlumnos!=null){
      this.dataSourceAlumnos.filter=filterValue
    }
  //  
  }
  obtenerClave(valor:string){
    console.log(" jajajaja"+ valor);
  this.claveProfesor=valor;

    
console.log("perrra "+Globales.urlBase + "/alumno/clave-profesor/"+valor)
    this.http.get<Alumno[]>(Globales.urlBase + "/alumno/clave-profesor/"+valor).subscribe(respuesta => { this.usersAlumnos = respuesta });
  


   // this.rows = data;
   // this.temp = [...data];
    setTimeout(() => {
         // Assign the data to the data source for the table to render
         console.log("MIS ALUMNOS BUSCADOS "+JSON.stringify(this.usersAlumnos));
         this.dataSourceAlumnos = new MatTableDataSource(this.usersAlumnos);
     
         this.dataSourceAlumnos.sort = this.sort;
     
         this.claveProfesor=valor;
         this.mostrarProfesores=false;
         this.mostrarGrupos=true;

    }, 1900);
  }
  nuevaBusqueda(){
   this.cargarProfesores()
  }

  cargarProfesores(){
    this.mostrarProfesores=true
    this.mostrarGrupos=false

    let estaUrl: string = Globales.urlBase + "/profesor";
    console.log("La es esta  url" + estaUrl);
    this.http.get<any[]>(estaUrl).subscribe(respuesta => { this.users = respuesta });
    this.dataSource = new MatTableDataSource(this.users);


   // this.rows = data;
   // this.temp = [...data];
    setTimeout(() => {
         // Assign the data to the data source for the table to render
         this.dataSource = new MatTableDataSource(this.users);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;

    }, 1500);
  
  }
}
