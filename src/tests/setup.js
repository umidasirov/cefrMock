import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// `expect` funksiyasiga `jest-dom` moslashtirgichlarini qo'shish
expect.extend(matchers);

// Har bir testdan keyin DOMni tozalash
afterEach(() => {
  cleanup();
});
