import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { TagFilterComponent } from './components/tag-filter/tag-filter.component';
import { ServerBindGridComponent } from './grids/server-bind-grid/server-bind-grid.component';
import { ChildGridComponent } from './grids/child-grid/child-grid.component';
import { TemplatePipe } from './grids/server-bind-grid/template.pipe';
import { TemplateObjectPipe } from './grids/server-bind-grid/template_object.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ColumnFilterPipe } from './components/pipes/column-filter.pipe';
import { SearchPipe } from './components/pipes/search.pipe';
import { ColumnSearchFilterPipe } from './components/pipes/column-search-filter.pipe';
import { SortHeaderComponent } from './components/sort-header/sort-header.component';
import { FilterHeaderComponent } from './components/filter-header/filter-header.component';
import { StringFilterComponent } from './components/string-filter/string-filter.component';
import { MultiSelectComponent } from './components/multi-select/multi-select.component';
import { NumberFilterComponent } from './components/number-filter/number-filter.component';
import { DateFilterComponent } from './components/date-filter/date-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [
        PaginationComponent,
        ConfirmationComponent,
        ColumnFilterPipe,
        SearchPipe,
        ColumnSearchFilterPipe,
        SortHeaderComponent,
        FilterHeaderComponent,
        MultiSelectComponent,
        NumberFilterComponent,
        DateFilterComponent,
        StringFilterComponent,
        TagFilterComponent,
        ServerBindGridComponent,
        TemplatePipe,
        TemplateObjectPipe,
        ChildGridComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ScrollingModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatMenuModule,
        MatInputModule,
        MatDividerModule,
        MatChipsModule,
        MatCardModule,
        MatCheckboxModule,
        MatProgressBarModule,
        MatRippleModule,
        DragDropModule,
        RouterModule
    ],
    exports: [ServerBindGridComponent]
})
export class AngularMaterialDataGridModule { }
