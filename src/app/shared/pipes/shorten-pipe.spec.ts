import { ShortenPipe } from './shorten-pipe';

describe('ShortenPipe', () => {
  let pipe: ShortenPipe;

  beforeEach(() => {
    pipe = new ShortenPipe();
  });

  it('should return empty string if value is null or empty', () => {
    expect(pipe.transform('')).toBe('');
    expect(pipe.transform(null as any)).toBe('');
  });

  it('should not shorten string shorter than limit', () => {
    const result = pipe.transform('Hello', 10);
    expect(result).toBe('Hello');
  });

  it('should shorten string longer than limit and add ellipsis', () => {
    const result = pipe.transform('1234567890', 5);
    expect(result).toBe('12345…');
  });

  it('should use default limit when not provided', () => {
    const longText = 'a'.repeat(60);
    const result = pipe.transform(longText);
    expect(result.length).toBe(51); // 50 chars + “…” 
  });
});
