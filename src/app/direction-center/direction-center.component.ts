import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DirectionsService} from '../directions.service';
import {Directions} from '../directions';

@Component({
  selector: 'app-direction-center',
  templateUrl: './direction-center.component.html',
  styleUrls: ['./direction-center.component.css']
})
export class DirectionCenterComponent implements OnInit {

  constructor(
    private router: Router,
    private dirService: DirectionsService
  ) {
  }

  ngOnInit() {

    this.dirService.getDirections().subscribe((directions: Array<Directions>) => {
      const firstDirection = directions[0];
      const origin = firstDirection.origin;
      const destination = firstDirection.destination;
      this.router.navigate(['direction', `${origin.lat},${origin.lng}`, `${destination.lat},${destination.lng}`]);
    }, (err) => {
      console.log('err', err);
    });

    console.log('test', 'DirectionCenterComponent');
  }

}
