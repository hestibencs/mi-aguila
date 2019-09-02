import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Place} from '../place';


@Injectable({
  providedIn: 'root'
})
export class DirectionsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getFavoritePlaces(): Observable<Place[]> {
    return this.getJSON('favorite-places');
  }

  getPlacesOrigin(): Observable<Place[]> {
    return this.getJSON('places-origin');
  }

  public getJSON(nameJson: string): Observable<any> {
    return this.http.get(`assets/${nameJson}.json`);
  }

}
