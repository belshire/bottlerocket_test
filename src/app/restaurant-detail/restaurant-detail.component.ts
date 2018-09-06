import {Component, Input, OnInit, ViewChild, AfterContentInit, OnChanges} from '@angular/core';

import { Restaurant } from '../restaurant';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit, AfterContentInit, OnChanges {
  @ViewChild('gmap') gmapElement: any;

  @Input() restaurant: Restaurant;
  map: google.maps.Map;
  marker: google.maps.Marker;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.restaurant && this.map) {
      const location = new google.maps.LatLng(this.restaurant.location.lat, this.restaurant.location.lng);

      this.map.setCenter(location);
      this.map.setZoom(15);

      if (!this.marker) {
        this.marker = new google.maps.Marker({
          position: location,
          map: this.map,
          title: this.restaurant.name
        });
      } else {
        this.marker.setPosition(location);
        this.marker.setTitle(this.restaurant.name);
      }
    }
  }

  ngAfterContentInit() {
    this.map = new google.maps.Map(this.gmapElement.nativeElement, {
      center: new google.maps.LatLng(32.7767, -96.7970),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  }
}
