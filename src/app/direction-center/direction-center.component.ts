import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DirectionsService} from '../services/directions.service';
import {forkJoin, Observable, of} from 'rxjs';
import {catchError, debounceTime, map, startWith, switchMap} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {GeocodeService} from '../services/geocode.service';
import {Place} from '../place';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-direction-center',
  templateUrl: './direction-center.component.html',
  styleUrls: ['./direction-center.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger(
      'blockInitialRenderAnimation',
      [
        transition('void => *', [])
      ]
    )
  ]
})
export class DirectionCenterComponent implements OnInit {

  address = new FormControl();
  placesDestination$: Observable<any> = null;
  favoritePlaces: Array<Place> = [];
  placesOrigin: Array<Place> = [];
  origin: Place;
  destination: Place;
  isShown = true;

  constructor(
    private router: Router,
    private dirService: DirectionsService,
    private geocodeService: GeocodeService
  ) {
  }

  ngOnInit() {

    const result$ = forkJoin(this.dirService.getPlacesOrigin(), this.dirService.getFavoritePlaces()).pipe(
      map(([placesOrigin, favoritePlaces]) => {
        return {placesOrigin, favoritePlaces};
      })
    );

    result$.subscribe((data: any) => {

      this.origin = data.placesOrigin[0];
      this.destination = data.favoritePlaces[0];
      this.placesOrigin = data.placesOrigin.map((e, i) => {
        if (i === 0) {
          e.active = i === 0;
        }
        return e;
      });
      this.favoritePlaces = data.favoritePlaces;

      this.redirectDirection(this.origin, this.destination);

    });

    this.placesDestination$ = this.address.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      switchMap(value => {
        if (value !== '') {
          return this.geocodeService.geocodeAddress(value).pipe(
            map(results => results),
            catchError(_ => {
              return of([]);
            })
          );
        } else {
          return of([]);
        }
      })
    );

  }

  changeOrigin(origin: Place) {
    this.placesOrigin.forEach(e => e.active = false);
    origin.active = true;
    this.origin = origin;
    this.redirectDirection(this.origin, this.destination);
  }

  changeDestination(destination: Place) {
    this.destination = destination;
    this.redirectDirection(this.origin, this.destination);
  }

  redirectDirection(origin: Place, destination: Place) {
    this.router.navigate([
      'direction',
      `${origin.location.lat},${origin.location.lng}`,
      `${destination.location.lat},${destination.location.lng}`
    ]);
  }

}
