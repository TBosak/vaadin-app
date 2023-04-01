import { AfterViewInit, Component, ElementRef, SimpleChanges, ViewChild } from '@angular/core';
import '@vaadin/grid/vaadin-grid.js';
import '@vaadin/grid/vaadin-grid-selection-column.js';
import '@vaadin/grid/vaadin-grid-sort-column.js';
import { Grid } from '@vaadin/grid/vaadin-grid.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'vaadin-app';
  data: any[] = [];
  @ViewChild('grid') grid!: ElementRef<Grid>;

  constructor(){

  }

  logSelected(){
    console.log(this.grid.nativeElement.selectedItems);
  }

  ngAfterViewInit(): void {
    fetch('https://demo.vaadin.com/demo-data/1.0/people?count=200')
      .then((res) => res.json())
      .then((json) => (this.data = json.result));
  }
}
