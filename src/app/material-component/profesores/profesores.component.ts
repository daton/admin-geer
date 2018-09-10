import { Component, OnInit ,ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globales } from '../../modelo/globales';

declare var require: any;
//const data: any = require('assets/company.json');
@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {
  editing = {};
  rows = [];
  data:any[]
  temp = this.data;

  loadingIndicator = true;
  reorderable = true;

  columns = [{ prop: 'nombre' }, { name: 'clave' }, { name: 'email' }];
  @ViewChild(ProfesoresComponent) table: ProfesoresComponent;
  constructor(public http:HttpClient) {

    let estaUrl: string = Globales.urlBase + "/profesor";
    console.log("La es esta  url" + estaUrl);
    this.http.get<any[]>(estaUrl).subscribe(respuesta => { this.data = respuesta });



   // this.rows = data;
   // this.temp = [...data];
    setTimeout(() => {

      this.rows = this.data;
    this.temp = [this.data];
    console.log("Tamano "+this.rows.length)
      this.loadingIndicator = false;
    }, 1500);
  

   }

  ngOnInit() {
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
  }
}
