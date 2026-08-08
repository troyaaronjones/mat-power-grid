# Mat Power Grid Documentation

Welcome to the comprehensive documentation for **Mat Power Grid**, an advanced and highly customizable Angular data grid system. It is designed to empower developers to quickly build feature-rich data tables, supporting both client-side and server-side pagination, sorting, advanced multi-filtering, custom cells, action buttons, expandable master-detail grids, and custom data fetching callbacks.

---

## Table of Contents

1. [Installation & Setup](#installation--setup)
2. [Component API Reference](#component-api-reference)
    - [Inputs](#inputs)
    - [Outputs](#outputs)
3. [Type Definitions & Interfaces](#type-definitions--interfaces)
4. [Column Configurations (`headings`)](#column-configurations-headings)
5. [Filtering Guide](#filtering-guide)
    - [String, Number, and Date Filters](#string-number-and-date-filters)
    - [Multi-select Filter (Internal Options)](#multi-select-filter-internal-options)
    - [Multi-select Filter (External Options)](#multi-select-filter-external-options)
    - [Tag Filter](#tag-filter)
6. [Complete Code Examples](#complete-code-examples)
    - [Example 1: Client-Side Pagination (Basic)](#example-1-client-side-pagination-basic)
    - [Example 2: Server-Side Pagination (Advanced)](#example-2-server-side-pagination-advanced)
    - [Example 3: Expandable Master-Detail (Child Grid)](#example-3-expandable-master-detail-child-grid)
    - [Example 4: Expandable Master-Detail (HTML Template)](#example-4-expandable-master-detail-html-template)
    - [Example 5: Grid Action Buttons](#example-5-grid-action-buttons)
    - [Example 6: Custom postData Fetching (NGRX/Custom Client)](#example-6-custom-postdata-fetching-ngrxcustom-client)
7. [Theming and Styling](#theming-and-styling)

---

## Installation & Setup

Ensure you have `@angular/material` and `@angular/cdk` installed in your project.

### 1. Install the Package
```bash
npm install mat-power-grid
```

### 2. Import the Module
In your Angular application (e.g., in a standalone component or an Angular module), import and include `MatPowerGridModule`:

```typescript
import { NgModule } from '@angular/core';
import { MatPowerGridModule } from 'mat-power-grid';

@NgModule({
  imports: [
    // ... other modules
    MatPowerGridModule
  ]
})
export class AppModule { }
```

---

## Component API Reference

The grid is invoked using the `<mpg-grid>` selector.

### Inputs

| Input | Type | Default | Description |
|---|---|---|---|
| `headings` | `GridHeading[]` | `[]` | Array of column definitions config. Controls visibility, filter, and sorting. |
| `url` | `string` | `''` | API URL endpoint to fetch data from. |
| `selection` | `boolean` | `false` | Enables/Disables a row selection checkbox column. |
| `columnControl` | `boolean` | `false` | Shows/Hides a button/dialog to manage column visibility and order via drag-and-drop. |
| `entity` | `any` | `null` | Custom parameters object sent with every API data request. |
| `transparency` | `boolean` | `false` | If `true`, the card container background is transparent. |
| `elevation` | `0` to `24` | `2` | Elevation shadow depth of the grid container card. |
| `serverSidePagination`| `boolean` | `false` | Enables/Disables server-side pagination and API-side sorting/filtering. |
| `initialFilters` | `GridFilterItem[]` | `[]` | Array of initial filters to apply to the grid upon loading. |
| `resetFilters` | `any` | `null` | When this input value changes, it resets all grid filters and reloads data. |
| `expandable` | `boolean` | `false` | Enables/Disables row expansion (Master-Detail). |
| `expandableConfig` | `GridMasterDetailConfig`| *See interface* | Detailed configuration of expanded row views (HTML or Child Grid). |
| `disableFullScreenToggle`| `boolean`| `false` | If `true`, hides the button to view the grid in full-screen mode. |
| `pageSizes` | `number[]` | `[50, 100, 250, 500, 1000]` | Available page size selections in the paginator. |
| `pageSize` | `number` | `100` | Initial default records shown per page. |
| `postData` | `((param: any) => Observable<any>) \| undefined` | `undefined` | Optional callback to provide a custom HTTP POST function. Ideal for state management (NGRX, Akita, etc.) or custom clients. |
| `rowHeight` | `number` | `40` | Custom row height in pixels for grid rows. Updates the CDK Virtual Scroll strategy accordingly. |
| `rowBackgroundField` | `string` | `undefined` | Row item property name to use as background color for each row (e.g., `'bgColor'`). |
| `rowBackgroundCallback` | `(item: any, index: number) => string` | `undefined` | Custom callback function to dynamically return the background color for each row based on row item data and index. |

### Outputs

| Output | Type | Description |
|---|---|---|
| `requestBodyEmit` | `EventEmitter<GridRequest>` | Emits request payload object before an API request is made. |
| `responseEmit` | `EventEmitter<GridResponse>` | Emits API data response payload upon successful retrieval. |
| `selectionEmit` | `EventEmitter<any[]>` | Emits array of currently selected row data objects. |
| `filtersChangedEmit` | `EventEmitter<GridFilterItem[]>` | Emits list of active filters when filters are applied/removed. |
| `sortChangedEmit` | `EventEmitter<GridSortItem>` | Emits sort direction and field name when a column sort changes. |
| `buttonClickEmit` | `EventEmitter<GridButtonClick>` | Emits details of row/button clicked inside button-group columns. |
| `rowClickEmit` | `EventEmitter<any>` | Emits when a row is clicked (passes the click event and row data). |
| `columnPreferencesChangedEmit` | `EventEmitter<GridHeading[]>` | Emits on every column visibility or order change. |
| `columnPreferencesChangeEndedEmit` | `EventEmitter<GridHeading[]>` | Emits when user closes column configuration changes. |
| `columnPreferencesResetEmit` | `EventEmitter<any>` | Emits when column preferences are reset to default. |
| `dataErrorEmit` | `EventEmitter<any>` | Emits any errors encountered during API request execution. |

---

## Type Definitions & Interfaces

Here are the key models imported from `mat-power-grid`:

### `GridHeading` (`GridHeadingInterface`)
Defines the schema, rendering details, and behavior for a column.
```typescript
interface GridHeading {
  fieldName: string;
  display: string;
  type: 'string' | 'number' | 'currency' | 'date' | 'button-group' | 'image-url';
  width?: string;
  clickable?: 'url' | 'button';
  disableFiltering?: boolean;
  disableSorting?: boolean;
  textAlign?: 'left' | 'right' | 'center';
  background?: string;
  color?: string;
  fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'bold' | 'normal';
  fontStyle?: 'italic' | 'normal';
  prefix?: string;
  suffix?: string;
  filterType?: 'multi-select' | 'tag';
  show?: boolean; // undefined = required column; true = visible by default; false = hidden by default.
  headerTooltip?: string;
  other?: OtherConfigType;
  sort?: null | '' | undefined | 'desc' | 'asc';
}
```

### `OtherConfigType`
Contains auxiliary settings for columns like multi-select options, URL redirects, and custom buttons.
```typescript
interface OtherConfigType {
  // URL Builders
  urlTemplate?: string;      // Route template (e.g., '/detail/:id')
  queryParams?: object;      // Key-value query parameters (e.g., { category: 'category' })
  openTab?: boolean;         // Adds icon to open the link in a new browser tab

  // Multi-Select Filters
  selectionMode?: 'single' | 'multiple';
  source?: 'internal' | 'external';
  optionsObject?: MultiSelectOptionsType[];
  url?: string;              // External GET API endpoint for multi-select options
  key?: string;              // Dropdown display label field from API response
  value?: string;            // Dropdown option value field from API response

  // Action Buttons Group
  mainButton?: ButtonConfigType; // Optional dropdown trigger button (MatMenu)
  buttons?: ButtonConfigType[];   // Actions list inside the column/menu
}
```

### `ButtonConfigType`
```typescript
interface ButtonConfigType {
  display: string;           // Display Text for button
  icon: string;              // Material Design Icon class name
  disableField?: string;     // Record row property name indicating disabled state if true
}
```

### `GridMasterDetailConfig`
Defines expansion templates or nested child grids.
```typescript
interface GridMasterDetailConfig {
  type: 'table' | 'html' | 'breakdown';
  multipleExpansion: boolean;
  template?: string;         // HTML template with double braces placeholders (e.g. '{{name}}')
  childGrid?: ChildGridConfigType;
}
```

### `ChildGridConfigType`
```typescript
interface ChildGridConfigType {
  headings: GridHeading[];
  url: string;
  entity: any;
  serverSidePagination: boolean;
}
```

### `GridFilterItem`
```typescript
interface GridFilterItem {
  field: string;
  operator: string;
  value: string;
}
```

### `GridSortItem`
```typescript
interface GridSortItem {
  sort: null | '' | 'desc' | 'asc';
  sortField: null | string;
}
```

---

## Column Configurations (`headings`)

Columns are defined by passing an array of `GridHeading` objects into `headings`.

### Specialized Column Types:
1. **`string`**: Renders standard text.
2. **`number`**: Renders numerical values, aligning to the right by default.
3. **`currency`**: Automatically formatted. Prefix/Suffix values can add currency symbols.
4. **`date`**: Formats timestamp values to local/standard dates.
5. **`image-url`**: Renders an image element utilizing the cell string value as `src`.
6. **`button-group`**: Renders custom actionable buttons (configured using the `other` configuration).

---

## Filtering Guide

Each column displays a specific filter operator interface based on its type.

### String, Number, and Date Filters
* **`string`**: Supports text matches like Contains, Starts With, Ends With, Equals, and Is Blank.
* **`number`**: Supports comparisons (Equals, Greater Than, Less Than, Between Ranges).
* **`date`**: Provides a standard datepicker range selection.

### Multi-select Filter (Internal Options)
For static lists (e.g., Status: Active/Inactive):
```typescript
const heading: GridHeading = {
  fieldName: 'status',
  display: 'Status',
  type: 'string',
  filterType: 'multi-select',
  other: {
    selectionMode: 'multiple',
    source: 'internal',
    optionsObject: [
      { text: 'Active', value: 'ACTIVE' },
      { text: 'Inactive', value: 'INACTIVE' }
    ]
  }
};
```

### Multi-select Filter (External Options)
For dynamic lists populated from an external endpoint:
```typescript
const heading: GridHeading = {
  fieldName: 'categoryId',
  display: 'Category',
  type: 'string',
  filterType: 'multi-select',
  other: {
    selectionMode: 'single',
    source: 'external',
    url: 'https://api.my-app.com/categories',
    key: 'categoryName',  // API response property name for label
    value: 'id'           // API response property name for value
  }
};
```

---

## Complete Code Examples

### Example 1: Client-Side Pagination (Basic)

Useful for small datasets where all records are retrieved once.

#### Component TypeScript (`client-grid.component.ts`)
```typescript
import { Component, OnInit } from '@angular/core';
import { GridHeading, GridResponse } from 'mat-power-grid';

@Component({
  selector: 'app-client-grid',
  templateUrl: './client-grid.component.html',
  standalone: false
})
export class ClientGridComponent implements OnInit {
  // Client-side pagination endpoints must return the entire list of records.
  apiUrl = 'https://api.my-app.com/users-all';

  headings: GridHeading[] = [
    { fieldName: 'id', display: 'ID', type: 'number', width: '80px' },
    { fieldName: 'fullName', display: 'Name', type: 'string', width: '200px' },
    { fieldName: 'email', display: 'Email Address', type: 'string' },
    { fieldName: 'role', display: 'Access Role', type: 'string', width: '120px' }
  ];

  onResponse(response: GridResponse) {
    console.log('Successfully fetched rows: ', response.gridData.length);
  }

  onError(err: any) {
    console.error('Failed to load user rows: ', err);
  }
}
```

#### Component HTML (`client-grid.component.html`)
```html
<div class="grid-card">
  <mpg-grid
    [headings]="headings"
    [url]="apiUrl"
    [serverSidePagination]="false"
    [columnControl]="true"
    [selection]="true"
    (responseEmit)="onResponse($event)"
    (dataErrorEmit)="onError($event)">
  </mpg-grid>
</div>
```

---

### Example 2: Server-Side Pagination (Advanced)

For large-scale databases. The grid manages requests containing pagination limits, filter states, and ordering vectors, expecting a segmented dataset from the backend.

#### Expected Request Body Shape (POST)
```json
{
  "entity": { "userId": 42 },
  "page": 1,
  "perPage": 100,
  "filters": [
    { "field": "fullName", "operator": "contains", "value": "john" }
  ],
  "sort": "asc",
  "sortField": "fullName"
}
```

#### Expected Response Body Shape
```json
{
  "payload": {
    "gridData": [
      { "id": 1, "fullName": "John Doe", "email": "john@doe.com" }
    ],
    "totalCount": 1500,
    "other": {}
  },
  "statusCode": 200,
  "success": true
}
```

#### Component TypeScript (`server-grid.component.ts`)
```typescript
import { Component } from '@angular/core';
import { GridHeading, GridRequest, GridResponse } from 'mat-power-grid';

@Component({
  selector: 'app-server-grid',
  templateUrl: './server-grid.component.html',
  standalone: false
})
export class ServerGridComponent {
  apiUrl = 'https://api.my-app.com/users/search';

  // Custom query context passed alongside each server-side grid POST body request
  entityQuery = {
    tenantId: 'tenant-908',
    statusFilter: 'ACTIVE'
  };

  headings: GridHeading[] = [
    { fieldName: 'id', display: 'ID', type: 'number', width: '100px' },
    { fieldName: 'fullName', display: 'Full Name', type: 'string' },
    { fieldName: 'salary', display: 'Salary', type: 'currency', prefix: '$', textAlign: 'right' },
    { fieldName: 'hireDate', display: 'Hired Date', type: 'date', width: '150px' }
  ];

  onRequestSent(request: GridRequest) {
    console.log('Server payload requested: ', request);
  }

  onResponse(res: GridResponse) {
    console.log(`Loaded rows. Total in database: ${res.totalCount}`);
  }
}
```

#### Component HTML (`server-grid.component.html`)
```html
<mpg-grid
  [headings]="headings"
  [url]="apiUrl"
  [entity]="entityQuery"
  [serverSidePagination]="true"
  [pageSize]="50"
  [pageSizes]="[25, 50, 100, 200]"
  (requestBodyEmit)="onRequestSent($event)"
  (responseEmit)="onResponse($event)">
</mpg-grid>
```

---

### Example 3: Expandable Master-Detail (Child Grid)

Allows a user to expand a record to reveal a separate, independent, nested child data table containing relational database rows.

#### Component TypeScript (`nested-grid.component.ts`)
```typescript
import { Component, OnInit } from '@angular/core';
import { GridHeading, GridMasterDetailConfig } from 'mat-power-grid';

@Component({
  selector: 'app-nested-grid',
  templateUrl: './nested-grid.component.html',
  standalone: false
})
export class NestedGridComponent implements OnInit {
  parentApiUrl = 'https://api.my-app.com/departments';

  parentHeadings: GridHeading[] = [
    { fieldName: 'departmentId', display: 'Dept ID', type: 'number', width: '100px' },
    { fieldName: 'departmentName', display: 'Department', type: 'string' },
    { fieldName: 'managerName', display: 'Manager', type: 'string' }
  ];

  masterDetailConfig!: GridMasterDetailConfig;

  ngOnInit() {
    this.masterDetailConfig = {
      type: 'table', // Sets details container as a child data grid
      multipleExpansion: false,
      childGrid: {
        headings: [
          { fieldName: 'employeeId', display: 'Employee ID', type: 'number' },
          { fieldName: 'fullName', display: 'Full Name', type: 'string' },
          { fieldName: 'email', display: 'Email', type: 'string' }
        ],
        // The child grid queries this URL. It can include contextual parameters via the entity property
        url: 'https://api.my-app.com/employees/search',
        entity: { activeOnly: true },
        serverSidePagination: false
      }
    };
  }
}
```

#### Component HTML (`nested-grid.component.html`)
```html
<mpg-grid
  [headings]="parentHeadings"
  [url]="parentApiUrl"
  [expandable]="true"
  [expandableConfig]="masterDetailConfig">
</mpg-grid>
```

---

### Example 4: Expandable Master-Detail (HTML Template)

Injects arbitrary HTML into the expanded section. Double-brace expressions are replaced on the fly with properties of the current row item.

#### Component TypeScript (`expandable-html.component.ts`)
```typescript
import { Component, OnInit } from '@angular/core';
import { GridHeading, GridMasterDetailConfig } from 'mat-power-grid';

@Component({
  selector: 'app-expandable-html',
  templateUrl: './expandable-html.component.html',
  standalone: false
})
export class ExpandableHtmlComponent implements OnInit {
  apiUrl = 'https://api.my-app.com/inventory';

  headings: GridHeading[] = [
    { fieldName: 'sku', display: 'SKU Code', type: 'string' },
    { fieldName: 'itemName', display: 'Item Name', type: 'string' },
    { fieldName: 'quantity', display: 'In Stock', type: 'number' }
  ];

  htmlConfig!: GridMasterDetailConfig;

  ngOnInit() {
    this.htmlConfig = {
      type: 'html',
      multipleExpansion: true,
      // Grid uses row properties (e.g., details, lastAuditedBy) to populate placeholders
      template: `
        <div style="padding: 15px; background: #fafafa; border-radius: 4px;">
          <h3>Product Detailed Information</h3>
          <p><strong>Description:</strong> {{details}}</p>
          <p><strong>Last Audited By:</strong> {{lastAuditedBy}}</p>
        </div>
      `
    };
  }
}
```

#### Component HTML (`expandable-html.component.html`)
```html
<mpg-grid
  [headings]="headings"
  [url]="apiUrl"
  [expandable]="true"
  [expandableConfig]="htmlConfig">
</mpg-grid>
```

---

### Example 5: Grid Action Buttons

How to show action triggers in a dedicated column, either rendered as a single action button or nested in a dropdown menu.

#### Component TypeScript (`action-buttons.component.ts`)
```typescript
import { Component } from '@angular/core';
import { GridHeading, GridButtonClick } from 'mat-power-grid';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  standalone: false
})
export class ActionButtonsComponent {
  apiUrl = 'https://api.my-app.com/orders';

  headings: GridHeading[] = [
    { fieldName: 'id', display: 'Order ID', type: 'number' },
    { fieldName: 'orderStatus', display: 'Status', type: 'string' },
    {
      fieldName: 'actions',
      display: 'Actions',
      type: 'button-group',
      width: '180px',
      other: {
        // If multiple buttons are present, they are automatically nested inside the mainButton MatMenu.
        // For a single button, you can omit the mainButton definition.
        mainButton: {
          display: 'Actions Menu',
          icon: 'more_vert'
        },
        buttons: [
          {
            display: 'Edit Order',
            icon: 'edit'
          },
          {
            display: 'Cancel Order',
            icon: 'cancel',
            // Button is disabled if current record row has property 'isCompleted' === true
            disableField: 'isCompleted'
          }
        ]
      }
    }
  ];

  onGridAction(event: GridButtonClick) {
    // event contains:
    // fieldName -> name of column ('actions')
    // click -> label of clicked button (e.g. 'Edit Order')
    // item -> exact row item object representation
    console.log(`Action clicked: ${event.click} for ID: ${event.item.id}`);

    if (event.click === 'Edit Order') {
      this.editOrder(event.item);
    } else if (event.click === 'Cancel Order') {
      this.cancelOrder(event.item);
    }
  }

  editOrder(item: any) { /* implementation */ }
  cancelOrder(item: any) { /* implementation */ }
}
```

#### Component HTML (`action-buttons.component.html`)
```html
<mpg-grid
  [headings]="headings"
  [url]="apiUrl"
  (buttonClickEmit)="onGridAction($event)">
</mpg-grid>
```

---

### Example 6: Custom `postData` Fetching (NGRX/Custom Client)

By default, the grid fetches data via HTTP POST calls through its internal `GridService`. You can override this behavior using the `postData` callback, which allows you to fetch data via NgRx selectors, custom API clients, state managers, or handle custom request authorization.

#### Component TypeScript (`custom-fetch-grid.component.ts`)
```typescript
import { Component } from '@angular/core';
import { GridHeading, GridRequest, GridResponse } from 'mat-power-grid';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-custom-fetch-grid',
  templateUrl: './custom-fetch-grid.component.html',
  standalone: false
})
export class CustomFetchGridComponent {
  headings: GridHeading[] = [
    { fieldName: 'id', display: 'ID', type: 'number' },
    { fieldName: 'title', display: 'Title', type: 'string' }
  ];

  constructor(private http: HttpClient) {}

  // Contextual wrapper method that takes the grid-formed query and returns an Observable
  fetchDataCallback = (body: GridRequest): Observable<any> => {
    // Custom endpoint path, header decoration, token integration, or mapping
    const customEndpoint = `https://api.my-app.com/secure-gateway/query`;
    const httpHeaders = {
      'Authorization': 'Bearer ' + 'MY_JWT_BEARER_TOKEN'
    };

    return this.http.post<any>(customEndpoint, body, { headers: httpHeaders }).pipe(
      map(res => {
        // Must yield a structure conforming to standard backend format:
        // { success: true, statusCode: 200, payload: { gridData: any[], totalCount: number } }
        return {
          success: true,
          statusCode: 200,
          payload: {
            gridData: res.items,
            totalCount: res.totalCount
          }
        };
      }),
      catchError(error => {
        console.error('Data retrieval failed', error);
        return of({ success: false, statusCode: 500, payload: { gridData: [], totalCount: 0 } });
      })
    );
  };
}
```

#### Component HTML (`custom-fetch-grid.component.html`)
```html
<mpg-grid
  [headings]="headings"
  [postData]="fetchDataCallback"
  [serverSidePagination]="true">
</mpg-grid>
```

---

## Theming and Styling

Mat Power Grid is written in SCSS. To customize theme options, color schemes, or typography, you can override variables defined within `mat-power-grid`.

### Main SCSS Files in Source:
* `projects/mat-power-grid/src/lib/variables.scss`: Global color, utility border-radius, and font layout variables.
* `projects/mat-power-grid/src/lib/mat-power-grid-utilities.scss`: CSS helper utilities (e.g., custom pulsing selection animations).

### Customize Variables
In your global stylesheet (such as `styles.scss`), customize variable declarations before importing Material components or grid sheets:

```scss
// Example custom scss values
$mpg-theme-primary: #1976d2;
$mpg-row-hover-bg: #f5f5f5;
$mpg-grid-border-color: #e0e0e0;

// Import your root material and component stylesheets as normal
```
