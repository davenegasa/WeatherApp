import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {

  @Input() ciudad: City;
  constructor() { }

  ngOnInit() {
  }

}
