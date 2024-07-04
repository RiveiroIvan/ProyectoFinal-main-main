import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ApiService { 
  private baseUrl = 'http://localhost:4200/inscripcion-detalle'

  constructor(private _httpClient: HttpClient){ }

  public getInfo(): Observable<any> {
    return this._httpClient.get<any>(this.baseUrl)
  }
}
