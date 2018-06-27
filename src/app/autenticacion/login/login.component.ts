import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

mostrarError:boolean=false;
  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group ( {
      login: [null , Validators.compose ( [ Validators.required ] )] , password: [null , Validators.compose ( [ Validators.required ] )]
    } );
  }

  onSubmit(){
   console.log("has hecho click"+JSON.stringify(this.form.value));
console.log("asasas "+this.form.get("login").value)
if(this.form.get("login").value=='admin'&&this.form.get("password").value=='admin2018'){
  this.mostrarError=false;
  this.router.navigate(["/starter"],{skipLocationChange:true}) 
}
   else{
     this.mostrarError=true;
   }
  }

}
