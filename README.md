# Mat Power Grid for Angular 20 - (Alpha)
#### Based on Advanced Angular Material Data Grid System (0.90) by Dillyboy

This is an advanced data grid which is free to use with features and customizability only available on paid data grids.

#### Features
- Easy to integrate server-side pagination (Tested with very large data sets)
- Built in virtual scrolling
- Advanced multi-filtering features
- Customizable theming
- Optional columns with re-ordering
- Master Detail Grid

The initial purpose of creating this data grid was to make it easy for developers to easily create highly advanced data grids with server-side pagination along with multiple filters and sorting with minimum effort and time. (Client Side Pagination is also present.) In order to make this possible a tight integration between the back-end data-source and the front-end component should be agreed upon. This gives the ability to stay focused on advanced functionality and the creation of data grids with only configurations while staying opinionated. Moreover, the solutions provided by reputed vendors were expensive which makes open-source software more attractive to many clients. This product is 100% open source. Check [Repository here](https://github.com/troyaaronjones/mat-power-grid).

<hr />

#### Compatibility

This library is compatible with Angular 20 and above.

#### Installation

**This package is in alpha and under active development. Breaking changes may be introduced in future versions.**

1.  **Install from npm:**
    ```bash
    npm install mat-power-grid
    ```

2.  **Install Angular Material** (if not already installed):
    ```bash
    ng add @angular/material
    ```

3.  **Import Module**
    ```typescript
    import { MatPowerGridModule } from 'mat-power-grid';

    imports: [
      // ...,
      MatPowerGridModule
    ]
    ```

---

## Detailed Documentation

Looking for advanced configurations like Master-Detail expansion, multi-select dropdown filters, tag searches, custom button configurations, and custom HTTP request handlers? Please refer to our full guide:

👉 [**View full Mat Power Grid Documentation here**](documentation.md)

---

## Quick-Start Setup Examples

Here are two quick setups for both **Client-Side** and **Server-Side** pagination.

### 1. Client-Side Pagination Example

For small-scale datasets where you retrieve all items in a single request and let the grid handle pagination, filtering, and sorting internally.

#### Component HTML
```html
<mpg-grid
  [headings]="headings"
  [url]="url"
  [serverSidePagination]="false"
  [columnControl]="true"
  [selection]="true"
  (responseEmit)="onResponseReceived($event)">
</mpg-grid>
```

#### Component TypeScript
```typescript
import { Component } from '@angular/core';
import { GridHeading, GridResponse } from 'mat-power-grid';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html'
})
export class UserGridComponent {
  url = 'https://api.example.com/users/all';

  headings: GridHeading[] = [
    { fieldName: 'id', display: 'ID', type: 'number', width: '80px' },
    { fieldName: 'name', display: 'Full Name', type: 'string' },
    { fieldName: 'email', display: 'Email Address', type: 'string' },
    { fieldName: 'role', display: 'User Role', type: 'string', width: '120px' }
  ];

  onResponseReceived(response: GridResponse) {
    console.log('Successfully loaded users: ', response.gridData.length);
  }
}
```

---

### 2. Server-Side Pagination Example

For large-scale datasets. The grid will send a POST request with page, pageSize, active filters, and sort options to the server, and expects the server to return the matching slice of data.

#### Component HTML
```html
<mpg-grid
  [headings]="headings"
  [url]="url"
  [serverSidePagination]="true"
  [entity]="queryParams"
  [pageSize]="50"
  (requestBodyEmit)="onRequestSent($event)"
  (responseEmit)="onResponseReceived($event)">
</mpg-grid>
```

#### Component TypeScript
```typescript
import { Component } from '@angular/core';
import { GridHeading, GridRequest, GridResponse } from 'mat-power-grid';

@Component({
  selector: 'app-orders-grid',
  templateUrl: './orders-grid.component.html'
})
export class OrdersGridComponent {
  url = 'https://api.example.com/orders/search';

  // Custom entity filters/variables sent with every POST request
  queryParams = {
    status: 'COMPLETED'
  };

  headings: GridHeading[] = [
    { fieldName: 'orderId', display: 'Order ID', type: 'number', width: '100px' },
    { fieldName: 'customerName', display: 'Customer', type: 'string' },
    { fieldName: 'amount', display: 'Total Price', type: 'currency', prefix: '$', textAlign: 'right' },
    { fieldName: 'orderDate', display: 'Order Date', type: 'date', width: '150px' }
  ];

  onRequestSent(requestBody: GridRequest) {
    console.log('Payload being sent to backend:', requestBody);
  }

  onResponseReceived(response: GridResponse) {
    console.log(`Successfully fetched records. Total in database: ${response.totalCount}`);
  }
}
```

For more details on custom query shapes, theming with SCSS variables, or setting up action buttons inside your grid, head over to the [Full Documentation Guide](documentation.md).
