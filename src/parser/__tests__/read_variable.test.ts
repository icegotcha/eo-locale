import { ETokenType, TokenStream } from '../token_stream';

describe('Read variable', () => {
	it('Should correct read variable', () => {
		const tokenStream = new TokenStream('{a}');

		expect(tokenStream.next()).toEqual({
			type: ETokenType.Variable,
			value: 'a',
		});
		expect(tokenStream.done).toBeTruthy();
	});

	it('Should correct read variable', () => {
		const tokenStream = new TokenStream('{ a }');

		expect(tokenStream.next()).toEqual({
			type: ETokenType.Variable,
			value: 'a',
		});
		expect(tokenStream.done).toBeTruthy();
	});

	it('Should throw error', () => {
		const tokenStream = new TokenStream('{}');

		expect(tokenStream.next).toThrowError();
	});
});