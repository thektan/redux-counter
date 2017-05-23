import { counter } from './index';

test('increment by 1', () => {
	expect(
		counter(0, { type: 'INCREMENT'})
	).toEqual(1);
});

test('decrement by 1', () => {
	expect(
		counter(0, { type: 'DECREMENT'})
	).toEqual(-1);
});

test('state stays the same for unknown action', () => {
	expect(
		counter(1, { type: 'SOME_ACTION'})
	).toEqual(1);
});

test('undefined defaults to 0', () => {
	expect(
		counter(undefined, {})
	).toEqual(0);
});
