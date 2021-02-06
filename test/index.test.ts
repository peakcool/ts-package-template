import { Hello } from '../src/index';

test('first test > Hello', () => {
	expect(Hello('World')).toBe('Hello World')
})
