import {Component, EventEmitter, Input, Output} from '@angular/core';

import { Restaurant } from '../restaurant';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  providers: [ RestaurantsService ],
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent {
  @Input() restaurants: Restaurant[];
  @Output() restaurantChange = new EventEmitter<Number>();

  constructor() { }

  getBackgroundURL(restaurant: Restaurant): string {
    return `url("${restaurant.backgroundImageURL}")`;
  }

  onClickRestaurant(index: number): void {
    this.restaurantChange.emit(index);
  }

}
