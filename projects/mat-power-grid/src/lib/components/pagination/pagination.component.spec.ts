import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        FormsModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: MatDialog, useValue: dialogSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate pages and pageInfoDisplayText correctly on continuePageChange', () => {
    component.noOfTotalRecords = 250;
    component.recordsPerPage = 50;
    component.newRecordsPerPage = 50;
    component.continuePageChange(1, false);

    expect(component.pages).toBe(5);
    expect(component.pagesOnDisplay.length).toBe(5);
    expect(component.pageInfoDisplayText).toContain('1 - 50 of 250 items');
  });

  it('should emit pageChanged on continuePageChange when notify is true', () => {
    spyOn(component.pageChanged, 'emit');
    component.noOfTotalRecords = 100;
    component.recordsPerPage = 50;
    component.continuePageChange(2, true);

    expect(component.pageChanged.emit).toHaveBeenCalledWith({ pageNo: 2, recordsPerPage: 50 });
  });
});
