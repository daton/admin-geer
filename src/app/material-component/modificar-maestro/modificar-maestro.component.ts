import { Component, OnInit } from '@angular/core';
import { Estatus } from '../../modelo/estatus';
import { Alumno } from '../../modelo/alumno';
import { HttpClient } from '@angular/common/http';
import { Globales } from '../../modelo/globales';
import swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-maestro',
  templateUrl: './modificar-maestro.component.html',
  styleUrls: ['./modificar-maestro.component.css']
})
export class ModificarMaestroComponent implements OnInit {
  claveAlumno: string
  estaDesactivado = true;

  estatus: Estatus = {}
  alumno: Alumno = {};

  mostrarAlumno = false;

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }


  buscarAlumno() {

    console.log(" La clave del alumno es  " + this.claveAlumno);
    this.http
      .get<Alumno>(Globales.urlBase + "/alumno-clave/" + this.claveAlumno)
      .subscribe(respuesta => {
      this.alumno = respuesta
        console.log("Mensaje del servidor" + JSON.stringify(this.alumno));
        this.estaDesactivado = false;
        if (this.alumno == null) this.mostrarAlumno = false;
        else this.mostrarAlumno = true;
      },
        error => {
          console.log("no encontrado" + error)
        }

      );

  }

  actualizarAlumno() {
    this.http
      .put<Estatus>(Globales.urlBase + "/actualizar-alumno", this.alumno)
      .subscribe(respuesta => {
      this.estatus = respuesta
        console.log("Mensaje del servidor" + JSON.stringify(this.estatus));
        swal("Actualizado", "Seha modificado la clave del profesor para esta clave de alumno", "success");
        this.mostrarAlumno = false;
      },
        error => {
          console.log("no encontrado" + error)
        }

      );
  }


}
