import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { InscripcionDetalleComponent } from './paginas/inscripcion-detalle/inscripcion-detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routes } from './app.routes';
import { HttpClientModule, HttpHeaderResponse, HttpHeaders, provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideHttpClient(),
    provideToastr(),
    HttpClientModule,
    ReactiveFormsModule,
  ]
};
