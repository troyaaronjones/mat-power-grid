import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  let pipe: SearchPipe;

  beforeEach(() => {
    pipe = new SearchPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return all values if args is undefined', () => {
    const items = [{ text: 'Alpha' }, { text: 'Beta' }];
    expect(pipe.transform(items, undefined)).toEqual(items);
  });

  it('should filter items based on text property', () => {
    const items = [
      { text: 'Apple' },
      { text: 'Banana' },
      { text: 'Pineapple' }
    ];
    const result = pipe.transform(items, 'app');
    expect(result.length).toBe(2);
    expect(result[0].text).toBe('Apple');
    expect(result[1].text).toBe('Pineapple');
  });
});
