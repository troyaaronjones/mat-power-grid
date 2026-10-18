# Mat Power Grid for Angular

An advanced, high-performance Angular Material Data Grid system offering enterprise-grade features free of charge. Built specifically for modern Angular and MDC-based Material components.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

![Mat Power Grid Overview](docs/images/overview-grid.png)

---

## Features
- **Server-Side & Client-Side Pagination:** Seamlessly manage small client-side datasets or massive server-side datasets.
- **Custom Data Fetching Callback:** Override standard POST requests using `@Input() postData` for custom API handlers or state stores (RxJS observables, NgRx, signals).
- **Virtual Scrolling:** Efficient CDK virtual scrolling strategy built-in for handling thousands of rows smoothly.
- **Multi-Filtering System:** String, numeric range/comparison, date range, tag-based, and multi-select dropdown filters.
- **Column Re-ordering & Control:** Drag-and-drop column reordering and visibility toggles.
- **Master-Detail Expansion:** Expandable child grids and custom HTML content templates per row.
- **MDC-Safe Styling Utilities:** Included utility stylesheet (`mat-power-grid-utilities.scss`) that ensures clean overlay menus and MDC touch target compatibility.

---

## Demo Showcase

### 1. Overview & Custom Styling
Support for client-side pagination, row selection checkboxes, customizable row action buttons, dynamic background color callbacks, and column sorting.

![Overview & Styling Grid](docs/images/overview-grid.png)

### 2. Column Controls & Visibility Toggles
Built-in column control menu supporting drag-and-drop column reordering and interactive show/hide toggles.

![Column Control Panel](docs/images/column-control.png)

### 3. Server-Side Integration & Advanced Filtering
Integrate server-side pagination with custom filtering callbacks (`[postData]`). Includes type-specific column search menus (date range pickers, numeric range filters, tag multi-matchers, and multi-select dropdowns).

![Server-Side & Advanced Filtering Grid](docs/images/server-filtering.png)

### 4. Master-Detail Row Expansion
Expand grid rows to reveal custom detail HTML templates or child grids.

![Master Detail Expansion Grid](docs/images/master-detail-grid.png)

---

## Interactive Demo Application

A full interactive demo application is included in this repository under `src/`. To launch the interactive demo application locally:

```bash
# 1. Install dependencies
yarn install

# 2. Build the library
yarn lib:build

# 3. Start the demo application
yarn start
```
Then navigate to `http://localhost:4200` in your browser.

---

## Compatibility

- **Angular:** `^20.0.0` or `^21.0.0`
- **Angular Material:** `^20.0.0` or `^21.0.0`
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

4. **Import MDC Utilities Stylesheet (in `styles.scss`):**
   ```scss
   @import 'mat-power-grid/src/lib/mat-power-grid-utilities.scss';
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
