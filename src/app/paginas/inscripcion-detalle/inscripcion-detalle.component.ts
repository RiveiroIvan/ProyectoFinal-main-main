import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscripcionesComponent } from "../inscripciones/inscripciones.component";
import { Inscripciones } from "../inscripciones/inscripciones.mock";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inscripcion-detalle',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inscripcion-detalle.component.html',
  styleUrl: './inscripcion-detalle.component.css'
})
export class InscripcionDetalleComponent implements OnInit{
  InscripcionesComponent: Inscripciones[] = []

  ngOnInit(): void {
    
  }

  constructor(){ }

}
