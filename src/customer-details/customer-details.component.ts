import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  @Input() customer: Customer = new Customer();
  @Output() customerChange: EventEmitter<Customer> =
    new EventEmitter<Customer>();

  constructor() {}

  ngOnInit() {}

  update() {
    this.customerChange.emit(this.customer);
  }
}
