import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EagleMapsService {

  constructor(private http: HttpClient) {
  }

  getCharacters() {
    return this
      .http
      .get(`${environment.url}/characters`);
  }

  getDirection() {
    const origin = {lat: 24.799448, lng: 120.979021};
    const destination = {lat: 24.799524, lng: 120.975017};

    return {origin, destination};
  }




}
