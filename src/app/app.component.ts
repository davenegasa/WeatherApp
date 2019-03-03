import { Component } from '@angular/core';
import { City } from './city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ciudad: City = new City();
  title = 'WeatherChallenge';
  

  recibirCiudad(c){
    this.ciudad = c;
    console.log("this.ciudad");
    console.log(this.ciudad);
  }
}
