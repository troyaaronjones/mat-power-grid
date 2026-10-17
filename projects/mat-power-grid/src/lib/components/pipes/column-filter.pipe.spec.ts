import { ColumnFilterPipe } from './column-filter.pipe';

describe('ColumnFilterPipe', () => {
  let pipe: ColumnFilterPipe;

  beforeEach(() => {
    pipe = new ColumnFilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter out headings where show is false', () => {
    const headings = [
      { fieldName: 'id', show: true },
      { fieldName: 'name', show: false },
      { fieldName: 'email' } // show is undefined
    ];

    const result = pipe.transform(headings);
    expect(result.length).toBe(2);
    expect(result[0].fieldName).toBe('id');
    expect(result[1].fieldName).toBe('email');
  });
});
