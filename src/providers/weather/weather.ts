import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = "a8e7434fd41cfb5e";
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = "http://api.wunderground.com/api/" +
                this.apiKey + "/conditions/q";
  }

  getWeather(city, state) {
    return this.http.get(this.url + "/" + state + "/" + city + ".json")
      .map(res => res.json());
  }

}
