import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { ServerBindGridComponent } from './server-bind-grid.component';
import { GridService } from '../grid.service';
import { ColumnFilterPipe } from '../../components/pipes/column-filter.pipe';
import { ColumnSearchFilterPipe } from '../../components/pipes/column-search-filter.pipe';
import { TemplatePipe } from './template.pipe';
import { TemplateObjectPipe } from './template_object.pipe';

describe('ServerBindGridComponent', () => {
  let component: ServerBindGridComponent;
  let fixture: ComponentFixture<ServerBindGridComponent>;
  let gridService: GridService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ServerBindGridComponent,
        ColumnFilterPipe,
        ColumnSearchFilterPipe,
        TemplatePipe,
        TemplateObjectPipe
      ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatMenuModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatTooltipModule,
        ScrollingModule,
        DragDropModule,
        NoopAnimationsModule
      ],
      providers: [GridService]
    }).compileComponents();

    fixture = TestBed.createComponent(ServerBindGridComponent);
    component = fixture.componentInstance;
    gridService = TestBed.inject(GridService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data using postData callback when provided', () => {
    const mockData = {
      statusCode: 200,
      payload: { gridData: [{ id: 101, title: 'Custom Data' }], totalCount: 1 }
    };
    component.postData = () => of(mockData);
    component.getData({ pageNo: 1, recordsPerPage: 50 });

    expect(component.response.gridData.length).toBe(1);
    expect(component.response.gridData[0].title).toBe('Custom Data');
  });

  it('should emit selection when gridItemSelectionChanged is called', () => {
    spyOn(component.selectionEmit, 'emit');
    component.gridItems = [{ id: 1, gridItemSelected: true }, { id: 2, gridItemSelected: false }];
    component.gridItemSelectionChanged(false);

    expect(component.selectedRows.length).toBe(1);
    expect(component.selectionEmit.emit).toHaveBeenCalledWith(component.selectedRows);
  });
});
