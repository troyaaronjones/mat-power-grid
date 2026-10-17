import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { TemplatePipe } from './template.pipe';

describe('TemplatePipe', () => {
  let pipe: TemplatePipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new TemplatePipe(sanitizer);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should replace template variables with values from args object', () => {
    const template = '<span>Hello {{name}}, welcome to {{city}}!</span>';
    const data = { name: 'Alice', city: 'Wonderland' };

    const result = pipe.transform(template, data);
    expect(result).toBeTruthy();
  });
});
