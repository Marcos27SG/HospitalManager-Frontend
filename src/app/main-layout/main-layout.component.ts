import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  
  isHandset$: Observable<boolean>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches),
        shareReplay()
      );
  }

  displayedColumns1: string[] = ['id', 'name', 'age'];
  dataSource1 = [
    { id: 1, name: 'John Doe', age: 30 },
    { id: 2, name: 'Jane Smith', age: 25 },
    { id: 3, name: 'Sam Johnson', age: 45 }
  ];

  displayedColumns2: string[] = ['product', 'price'];
  dataSource2 = [
    { product: 'Laptop', price: '$999' },
    { product: 'Smartphone', price: '$599' },
    { product: 'Tablet', price: '$399' }
  ];

  displayedColumns3: string[] = ['orderId', 'customerName', 'amount'];
  dataSource3 = [
    { orderId: 'ORD123', customerName: 'Alice Brown', amount: '$250' },
    { orderId: 'ORD124', customerName: 'Bob Green', amount: '$150' },
    { orderId: 'ORD125', customerName: 'Carol White', amount: '$450' }
  ];

  displayedColumns4: string[] = ['department', 'employees'];
  dataSource4 = [
    { department: 'HR', employees: 12 },
    { department: 'IT', employees: 25 },
    { department: 'Sales', employees: 18 }
  ];
}