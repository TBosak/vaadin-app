import { AfterViewInit, Component, ViewChild } from '@angular/core';
import '@vaadin/grid/vaadin-grid.js';
import '@vaadin/grid/vaadin-grid-selection-column.js';
import '@vaadin/grid/vaadin-grid-sort-column.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'vaadin-app';
  data: any[] = [];

  constructor(){

  }

  ngAfterViewInit(): void {
    fetch('https://demo.vaadin.com/demo-data/1.0/people?count=200')
      .then((res) => res.json())
      .then((json) => (this.data = json.result));
  }
}
