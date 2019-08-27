import {Component, OnInit} from '@angular/core';
import {EagleMapsService} from '../eagle-maps.service';

@Component({
  selector: 'app-require-eagle',
  templateUrl: './require-eagle.component.html',
  styleUrls: ['./require-eagle.component.css']
})
export class RequireEagleComponent implements OnInit {


  public lat = 24.799448;
  public lng = 120.979021;

  public origin: any;
  public destination: any;

  routes = [];

  constructor(private eagleMapsService: EagleMapsService) {
  }

  ngOnInit() {

    this.eagleMapsService.getCharacters().subscribe((data: any) => {
      this.routes = data;
      console.log('data', data);
    }, (err) => {
      console.log('err', err);
    });

    const direction = this.eagleMapsService.getDirection();
    this.origin = direction.origin;
    this.destination = direction.destination;
  }

  printRoute(route: any) {
    this.lat = route.lat;
    this.lng = route.lng;
    this.origin = route.origin;
    this.destination = route.destination;
  }

}
