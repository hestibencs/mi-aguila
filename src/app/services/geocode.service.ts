import {Injectable} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {Observable, of} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {map, switchMap, tap} from 'rxjs/operators';
import {Place} from '../place';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GeocodeService {

  private geocoder: any;

  constructor(
    private mapLoader: MapsAPILoader
  ) {
  }

  geocodeAddress(location: string): Observable<any> {
    return this.waitForMapsToLoad().pipe(
      switchMap(() => {
        return new Observable(observer => {
          this.geocoder.geocode({address: location}, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
              const places: Place[] = results.map(e => {
                return {
                  name: `${e.address_components[1].short_name} ${e.address_components[2].short_name}`,
                  formattedAddress: `${e.formatted_address}`,
                  location: {
                    lat: e.geometry.location.lat(),
                    lng: e.geometry.location.lng()
                  }
                };
              });
              observer.next(places);
            } else {
              observer.next([]);
            }
            observer.complete();
          });
        });
      })
    );
  }

  private initGeocoder() {
    this.geocoder = new google.maps.Geocoder();
  }

  private waitForMapsToLoad(): Observable<boolean> {
    if (!this.geocoder) {
      return fromPromise(this.mapLoader.load())
        .pipe(
          tap(() => this.initGeocoder()),
          map(() => true)
        );
    }
    return of(true);
  }
}
