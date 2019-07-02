import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Profesor } from '../../modelo/profesor';

import { Globales } from '../../modelo/globales';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../../modelo/alumno';

@Component({
  selector: 'app-adminclaves',
  templateUrl: './adminclaves.component.html',
  styleUrls: ['./adminclaves.component.css']
})
export class AdminclavesComponent implements OnInit {
  displayedColumns = ['clave', 'email', 'password', 'claveProfesor'];
  dataSource: MatTableDataSource<Alumno>;
 
   users: Alumno[] = [];

   claveProfesor=''

   mostrarProfesores=true
   mostrarGrupos=false
color='blue'
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

mensaje="cargando..."
cargando=false;

registrados=''
mostrarTabla=false;
 

  constructor(public http:HttpClient) {

    let estaUrl: string = Globales.urlBase + "/adminclave/alumno";
    console.log("La es esta  url" + estaUrl);
    this.http.get<Alumno[]>(estaUrl).subscribe(respuesta => { this.users = respuesta });
    this.dataSource = new MatTableDataSource(this.users);
   


   // this.rows = data;
   // this.temp = [...data];
    setTimeout(() => {
         // Assign the data to the data source for the table to render
         this.dataSource = new MatTableDataSource(this.users);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;

    }, 1800);
  

   }

  
  ngOnInit() {

  }
  ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if(this.dataSource!=null){
      this.dataSource.filter=filterValue
    }
  //  
  }
  cargarLista(){
    console.log(" jajajaja");
    this.mostrarProfesores=true
    this.mostrarGrupos=true

    this.cargando=true;
 
    let estaUrl: string = Globales.urlBase + "/adminclave/alumno";
    console.log("La es esta  url" + estaUrl);
    this.http.get<Alumno[]>(estaUrl).subscribe(respuesta => { this.users = respuesta
    
             // Assign the data to the data source for the table to render
             this.registrados=''+this.users.length
             this.dataSource = new MatTableDataSource(this.users);
             this.dataSource.paginator = this.paginator;
             this.dataSource.sort = this.sort;
         this.mostrarTabla=true
         this.cargando=false
    
    });
  
  
    setTimeout(() => {


    }, 1800);
  }

  

 
}
