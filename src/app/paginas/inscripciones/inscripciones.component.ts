import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Inscripciones } from "../inscripciones/inscripciones.mock";
import { ApiService } from '../../api.service';
import { RouterLink } from '@angular/router';
import { InscripcionDetalleComponent } from "../inscripcion-detalle/inscripcion-detalle.component";

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-inscripciones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './inscripciones.component.html',
  styleUrl: './inscripciones.component.css',
})

export class InscripcionesComponent implements OnInit {

  infoInscripciones: Inscripciones[] = []
  getRegistro!: FormGroup;

  enviar(event: Event) {
    event.preventDefault();
    console.log(this.getRegistro.value);
  }

  hasErrors(field: string, TypeError: string) {
    return (
      this.getRegistro.get(field)?.hasError(TypeError) &&
      this.getRegistro.get(field)?.touched
    );
  }
  
  constructor( private formBuilder: FormBuilder){
      this.getRegistro = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        identification: ['', [Validators.required]],
        name: ['', [Validators.required, Validators.minLength(3)]],
    })
  }

  ngOnInit(): void {
    
  }
}






  // private ApiService: ApiService
  // ngOnInit(): void {
  //   this.ApiService.getInfo().subscribe((data: Inscripciones[]) => {
  //     this.infoInscripciones = data;
  //     console.log(data)
  //   })
  // }



  //  constructor(private formBuilder: FormBuilder) {
  //    this.getRegistro = this.formBuilder.group({
  //      email: ['', [Validators.required, Validators.email]],
  //      password: ['', [Validators.required]],
  //      identification: ['', [Validators.required]],
  //      name: ['', [Validators.required, Validators.minLength(3)]],
  //    });
  //  }
  // name: string = '';
  // identification!: number;
  // email: string = '';
  // password: string = '';

  // onSubmit(): void {
  //   if (this.name === '' || this.identification === undefined || this.password === '') {
  //     this.email = 'ERROR';
  //   } else {
  //     this.email = 'El formulario se ha enviado correctamente';
  //     console.log('asasdasdsd')
  //   }
