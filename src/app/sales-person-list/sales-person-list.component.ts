import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Jakub", "Chyla", "jakub@gmail.com", 1000),
    new SalesPerson("Elon", "Musk", "elon@gmail.com", 1500),
    new SalesPerson("Joe", "Biden", "Joe@gmail.com", 2000),
    new SalesPerson("Donald", "Trump", "Donald@gmail.com", 2000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
