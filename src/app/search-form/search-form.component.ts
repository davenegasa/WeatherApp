import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  cityResponse: any;
  city: City = new City();
  selectedMetric: any;
  selectedCity: any;

  @Output() muestraCiudad = new EventEmitter();

  cities = [
    {name: 'Santiago', id: '3871336'},
    {name: 'Antofagasta', id: '8261129'},
    {name: 'Valparaiso', id: '8261129'},
    {name: 'Talcahuano', id: '3870282'},
    {name: 'Temuco', id: '3870011'},
    {name: 'Iquique', id: '3887127'},
    {name: 'Rancagua', id: '3873775'},
    {name: 'Talca', id: '3870294'},
    {name: 'Copiapo', id: '3893656'},
    {name: 'Valparaiso', id: '8261129'},
    {name: 'La Serena', id: '3884373'},
    {name: 'Osorno', id: '3877949'},
    {name: 'Vallenar', id: '3868633'},
    {name: 'Angol', id: '3899629'},
    {name: 'Chillan', id: '3895088'},
    {name: 'Arica', id: '3899361'},
    {name: 'Concepcion', id: '3893894'},
    {name: 'Victoria', id: '3868326'},
  ];

  units = [
    {name: 'metric'},
    {name: 'imperial'},
  ];

  
  constructor(private dataService: CityService,private http: HttpClient) { }

  ngOnInit() {
  }

  submitForm() {
    this.searchWeather(this.selectedCity,this.selectedMetric);
  }

  private searchWeather(city:any,metric:any) {

    this.dataService.getUser(city,metric).subscribe(data => {
      this.cityResponse = data;
    });
    //this.showWeather(this.selectedCity,this.selectedMetric);
    //instancia city

    if(this.cityResponse != null){
      
      console.log('=================================');
      console.log('      RESPONSE API WEATHER');
      console.log('=================================');
      console.log('name ' + this.cityResponse.name);
      console.log('country ' + this.cityResponse.sys.country);
      console.log('latitude ' + this.cityResponse.coord.lat);
      console.log('longitude ' + this.cityResponse.coord.lon);
      console.log('currentWeather ' + this.cityResponse.main.temp);
      console.log('windSpeed ' + this.cityResponse.wind.speed);

      this.city.name = this.cityResponse.name;
      this.city.countryCode = this.cityResponse.sys.country;
      this.city.latitude = this.cityResponse.coord.lat;
      this.city.longitude = this.cityResponse.coord.lon;
      this.city.currentWeather = this.cityResponse.main.temp;
      this.city.windSpeed = this.cityResponse.wind.speed;

      this.muestraCiudad.emit(this.city);
    }
    
  }
}
