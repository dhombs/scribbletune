'use strict';

const fs = require('fs');
const test = require('tape');
const scribble = require('../src/index');

test('Scribbletune::midi', (t) => {
	let fileExists = false;
	let result = scribble.midi(scribble.clip());
	let check = [ 'M',
				'T',
				'h',
				'd',
				'\u0000',
				'\u0000',
				'\u0000',
				'\u0006',
				'\u0000',
				'\u0000',
				'\u0000',
				'\u0001',
				'\u0000',
				'',
				'M',
				'T',
				'r',
				'k',
				'\u0000',
				'\u0000',
				'\u0000',
				'\r',
				'\u0000',
				'',
				'0',
				'',
				'',
				'\u0000',
				'',
				'0',
				'Z',
				'\u0000',
				'ÿ',
				'/',
				'\u0000' ];
	
	t.equal(check.join(''), result, 'Scribbletune renders a default MIDI stream');
	t.end();
});
