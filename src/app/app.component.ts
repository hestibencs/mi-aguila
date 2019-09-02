import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-aguila';
  menu = [
    'Pedir Aguil',
    'Vuelos',
    'Rutas',
    'Administrar',
    'Estadisticas',
    'Medios de pago',
    'Cerrar sesión'];
}
