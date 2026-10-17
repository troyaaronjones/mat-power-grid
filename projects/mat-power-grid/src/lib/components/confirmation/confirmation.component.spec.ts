import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationComponent } from './confirmation.component';

describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<ConfirmationComponent>>;

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [ConfirmationComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { title: 'Test Title', content: 'Test Content', cancel_text: 'CANCEL', ok_text: 'OK' }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and set content from injected data', () => {
    expect(component).toBeTruthy();
    expect(component.content.title as unknown as string).toBe('Test Title');
  });

  it('should close dialog without value on close()', () => {
    component.close();
    expect(dialogRefSpy.close).toHaveBeenCalledWith();
  });

  it('should close dialog with true on ok()', () => {
    component.ok();
    expect(dialogRefSpy.close).toHaveBeenCalledWith(true);
  });
});
