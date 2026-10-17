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
import { ChildGridComponent } from './child-grid.component';
import { GridService } from '../grid.service';
import { ColumnFilterPipe } from '../../components/pipes/column-filter.pipe';
import { TemplatePipe } from '../server-bind-grid/template.pipe';
import { TemplateObjectPipe } from '../server-bind-grid/template_object.pipe';

describe('ChildGridComponent', () => {
  let component: ChildGridComponent;
  let fixture: ComponentFixture<ChildGridComponent>;
  let gridService: GridService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ChildGridComponent,
        ColumnFilterPipe,
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

    fixture = TestBed.createComponent(ChildGridComponent);
    component = fixture.componentInstance;
    gridService = TestBed.inject(GridService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data on getData', () => {
    const dummyResponse = {
      statusCode: 200,
      payload: { gridData: [{ id: 1, name: 'Test' }], totalCount: 1 }
    };
    spyOn(gridService, 'getAnyPost').and.returnValue(of(dummyResponse));

    component.getData({ pageNo: 1, recordsPerPage: 50 });

    expect(gridService.getAnyPost).toHaveBeenCalled();
    expect(component.response.gridData.length).toBe(1);
    expect(component.response.totalCount).toBe(1);
  });
});
