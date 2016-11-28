import chai, { expect } from 'chai'
chai.should()

import format from '../source/format'

describe('format', () =>
{
	it('should work with the first object argument expanded', function()
	{
		format('+12133734253', 'National').should.equal('(213) 373-4253')
		format('2133734253', 'US', 'International').should.equal('+1 213 373 4253')
	})

	it('should format valid phone numbers', function()
	{
		// Switzerland
		format({ country: 'CH', phone: '446681800' }, 'International').should.equal('+41 44 668 18 00')
		format({ country: 'CH', phone: '446681800' }, 'International_plaintext').should.equal('+41446681800')
		format({ country: 'CH', phone: '446681800' }, 'National').should.equal('044 668 18 00')
	})
})