import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '61bb3b1a1c532bf63645b80498275fbc';

  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${this.apiKey}`;
    return this.http.get(url, {})
  }
}
