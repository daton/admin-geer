import { Component, OnInit ,ViewChild, AfterViewInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globales } from '../../modelo/globales';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Profesor } from '../../modelo/profesor';

declare var require: any;
//const data: any = require('assets/company.json');
@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit, AfterViewInit {
  displayedColumns = ['clave','password', 'email', 'nombre', 'paterno'];
  dataSource: MatTableDataSource<Profesor>;
   users: Profesor[] = [];
color='blue'
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public http:HttpClient) {

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
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  jaja(valor:string){
    console.log(" jajajaja"+ valor);
  }
}
