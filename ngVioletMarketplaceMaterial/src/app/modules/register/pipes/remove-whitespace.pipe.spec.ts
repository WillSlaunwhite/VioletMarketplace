import { RemoveWhitespacePipe } from './to-camel-case.pipe';

describe('RemoveWhitespacePipe', () => {
  it('create an instance', () => {
    const pipe = new RemoveWhitespacePipe();
    expect(pipe).toBeTruthy();
  });
});
