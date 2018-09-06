import {Component, Input, OnInit} from '@angular/core';

import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  @Input() restaurant: Restaurant;

  constructor() {
  }

  ngOnInit() {
  }

}
