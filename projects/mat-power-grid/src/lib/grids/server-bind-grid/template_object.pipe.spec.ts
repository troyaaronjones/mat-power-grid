import { TemplateObjectPipe } from './template_object.pipe';

describe('TemplateObjectPipe', () => {
  let pipe: TemplateObjectPipe;

  beforeEach(() => {
    pipe = new TemplateObjectPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should replace template variables in JSON object template', () => {
    const templateObj = { key: '{{id}}', title: 'User {{username}}' };
    const args = { id: 123, username: 'johndoe' };

    const result: any = pipe.transform(templateObj, args);
    expect(result.key).toBe('123');
    expect(result.title).toBe('User johndoe');
  });
});
