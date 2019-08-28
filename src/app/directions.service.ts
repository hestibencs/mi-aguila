import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Directions} from './directions';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DirectionsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getDirections(): Observable<Array<Directions>> {
    return this.http.get<Array<Directions>>(`${environment.url}/directions`);
  }

}
