import {Component, Input, OnInit} from '@angular/core';
import { RestaurantsService } from './restaurants.service';
import {Restaurant} from './restaurant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ RestaurantsService ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  restaurants: Restaurant[];
  currentRestaurant: Restaurant;
  title: String = 'Lunch Tyme';

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantsService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  changeRestaurant(index): void {
    this.currentRestaurant = this.restaurants[index];
  }

}
