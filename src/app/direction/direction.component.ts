import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocationPlace} from '../place';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {

  public origin: LocationPlace;
  public destination: LocationPlace;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const origin = params.get('origin').split(',');
      const destination = params.get('destination').split(',');

      this.origin = {
        lat: +origin[0],
        lng: +origin[1]
      };

      this.destination = {
        lat: +destination[0],
        lng: +destination[1]
      };
    });

  }

}
