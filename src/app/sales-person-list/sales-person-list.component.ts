import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects

  salesPersonList: SalesPerson[] = [
  new SalesPerson('Anup', 'Kumar', 'anup.kumar@ll.es', 20000),
  new SalesPerson('John', 'Doe', 'john.doe@ll.es', 30000),
  new SalesPerson('Claire', 'Murphy', 'claire.murphy@ll.es', 40000),
  new SalesPerson('Mai', 'Truong', 'mai.truong@ll.es', 50000),


];

  constructor() { }

  ngOnInit(): void {
  }

}
