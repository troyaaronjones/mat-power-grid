# Mat Power Grid for Angular 20

An advanced, high-performance Angular Material Data Grid system offering enterprise-grade features free of charge. Built specifically for Angular 20 and modern MDC-based Material components.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Features
- **Server-Side & Client-Side Pagination:** Seamlessly manage small client-side datasets or massive server-side datasets.
- **Custom Data Fetching Callback:** Override standard POST requests using `@Input() postData` for custom API handlers or state stores.
- **Virtual Scrolling:** Efficient CDK virtual scrolling strategy built-in for handling thousands of rows smoothly.
- **Multi-Filtering System:** String, numeric range/comparison, date range, tag-based, and multi-select dropdown filters.
- **Column Re-ordering & Control:** Drag-and-drop column reordering and visibility toggles.
- **Master-Detail Expansion:** Expandable child grids and custom HTML content templates per row.
- **MDC-Safe Styling Utilities:** Included utility stylesheet (`mat-power-grid-utilities.scss`) that ensures clean overlay menus and MDC touch target compatibility.

---

## Compatibility

- **Angular:** `^20.0.0`
- **Angular Material:** `^20.0.0`
- **RxJS:** `~7.8.0`

---

## Installation

1. **Install via npm or yarn:**
   ```bash
   npm install mat-power-grid
   # or
   yarn add mat-power-grid
   ```

2. **Ensure Angular Material is installed:**
   ```bash
   ng add @angular/material
   ```

3. **Import Module:**
   ```typescript
   import { MatPowerGridModule } from 'mat-power-grid';

   @NgModule({
     imports: [
       // ...
       MatPowerGridModule
     ]
   })
   export class AppModule { }
   ```

---

## Quick-Start Setup

### 1. Client-Side Data Grid

```html
<mpg-grid
  [headings]="headings"
  [url]="'/api/users'"
  [serverSidePagination]="false"
  [columnControl]="true"
  [selection]="true"
  (responseEmit)="onResponseReceived($event)">
</mpg-grid>
```

```typescript
import { Component } from '@angular/core';
import { GridHeading, GridResponse } from 'mat-power-grid';

@Component({
  selector: 'app-user-grid',
  templateUrl: './user-grid.component.html'
})
export class UserGridComponent {
  headings: GridHeading[] = [
    { fieldName: 'id', display: 'ID', type: 'number', width: '80px' },
    { fieldName: 'name', display: 'Full Name', type: 'string' },
    { fieldName: 'email', display: 'Email Address', type: 'string' }
  ];

  onResponseReceived(response: GridResponse) {
    console.log('Loaded items:', response.gridData.length);
  }
}
```

### 2. Server-Side Data Grid with Custom Data Fetching (`postData`)

```html
<mpg-grid
  [headings]="headings"
  [serverSidePagination]="true"
  [postData]="fetchGridData">
</mpg-grid>
```

```typescript
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GridHeading, GridRequest } from 'mat-power-grid';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html'
})
export class CustomGridComponent {
  headings: GridHeading[] = [
    { fieldName: 'orderId', display: 'Order ID', type: 'number' },
    { fieldName: 'customer', display: 'Customer', type: 'string' }
  ];

  fetchGridData = (request: GridRequest): Observable<any> => {
    // Custom data source or service call
    return of({
      statusCode: 200,
      payload: {
        gridData: [{ orderId: 101, customer: 'Acme Corp' }],
        totalCount: 1
      }
    });
  };
}
```

---

## Documentation

For full details on Master-Detail expansion, multi-select filters, SCSS styling, column configuration, and query payloads, please consult [documentation.md](documentation.md).

---

## Contributing

We welcome community contributions! Please review [CONTRIBUTING.md](CONTRIBUTING.md) for details on setting up your environment, writing unit tests, and submitting PRs.

---

## License

This project is open-source software licensed under the [MIT License](LICENSE).
