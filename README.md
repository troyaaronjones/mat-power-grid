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

As this package is not available on the npm registry, you need to build it from the source.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/troyaaronjones/mat-power-grid.git
    cd mat-power-grid
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Build the library:**
    ```bash
    npm run lib:build
    ```

4.  **Navigate to the distribution directory and link the package:**
    ```bash
    cd dist/mat-power-grid
    npm link
    ```

5.  **Navigate to your project and link the package:**
    ```bash
    cd /path/to/your/project
    npm link mat-power-grid
    ```

6.  **Install Angular Material** (if not already installed):
    ```bash
    ng add @angular/material
    ```

7.  **Import Module**
    ```typescript
    import { MatPowerGridModule } from 'mat-power-grid';

    imports: [
      // ...,
      MatPowerGridModule
    ]
    ```

#### Usage (Basic)
###### HTML
- <code>&lt;mpg-grid <br>
     &nbsp;&nbsp;&nbsp;&nbsp;[headings]="headings"<br>
     &nbsp;&nbsp;&nbsp;&nbsp;[url]="url"<br>
     &nbsp;&nbsp;&nbsp;&nbsp;[serverSidePagination]="true"<br>
     &nbsp;&nbsp;&nbsp;&nbsp;(responseEmit)="responseReceived($event)"&gt;<br>
     &lt;/mpg-grid&gt;</code>

###### TypeScript
For a complete example of the component's inputs and outputs, please refer to the [documentation.md](documentation.md) file.
