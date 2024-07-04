import { Injectable, OnInit } from '@angular/core';
import { Inscripciones } from './inscripciones.mock';
import { ApiService } from '../../api.service';

@Injectable({
  providedIn: 'root'
})
export class InscripcionesService implements OnInit{

  Inscripcion: Inscripciones[] = []

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    
  }
}
