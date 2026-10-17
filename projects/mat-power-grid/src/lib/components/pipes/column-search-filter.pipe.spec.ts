import { ColumnSearchFilterPipe } from './column-search-filter.pipe';

describe('ColumnSearchFilterPipe', () => {
  let pipe: ColumnSearchFilterPipe;

  beforeEach(() => {
    pipe = new ColumnSearchFilterPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return all values if args is undefined', () => {
    const items = [{ display: 'Name' }, { display: 'Age' }];
    expect(pipe.transform(items, undefined)).toEqual(items);
  });

  it('should filter values based on search query case-insensitively', () => {
    const items = [
      { display: 'First Name' },
      { display: 'Last Name' },
      { display: 'Email' }
    ];
    const result = pipe.transform(items, 'name');
    expect(result.length).toBe(2);
    expect(result[0].display).toBe('First Name');
    expect(result[1].display).toBe('Last Name');
  });
});
