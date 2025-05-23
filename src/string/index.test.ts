import { capitalize, kebabCase, camelCase, snakeCase } from './index';

describe('String Utilities', () => {
  describe('capitalize', () => {
    it('should capitalize the first character', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('Hello')).toBe('Hello');
      expect(capitalize('h')).toBe('H');
      expect(capitalize('')).toBe('');
    });
  });

  describe('kebabCase', () => {
    it('should convert to kebab-case', () => {
      expect(kebabCase('helloWorld')).toBe('hello-world');
      expect(kebabCase('Hello World')).toBe('hello-world');
      expect(kebabCase('foo_bar')).toBe('foo_bar');
      expect(kebabCase('fooBarBaz')).toBe('foo-bar-baz');
    });
  });

  describe('camelCase', () => {
    it('should convert to camelCase', () => {
      expect(camelCase('hello-world')).toBe('helloWorld');
      expect(camelCase('Hello world')).toBe('helloWorld');
      expect(camelCase('foo_bar_baz')).toBe('fooBarBaz');
      expect(camelCase('foo-bar-baz')).toBe('fooBarBaz');
    });
  });

  describe('snakeCase', () => {
    it('should convert to snake_case', () => {
      expect(snakeCase('helloWorld')).toBe('hello_world');
      expect(snakeCase('Hello World')).toBe('hello_world');
      expect(snakeCase('foo-bar-baz')).toBe('foo_bar_baz');
      expect(snakeCase('fooBarBaz')).toBe('foo_bar_baz');
    });
  });
});
