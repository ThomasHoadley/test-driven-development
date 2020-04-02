import { expect } from 'chai'
import { getLetterCount } from './letter-count.js'

// describe the test test is for.
describe('getLetterCount - basic functionality', () => {
    // test for empty strings
    it('returns an empty object when passed an empty string', () => {
        const expected = {}
        const actual = getLetterCount('')
        // we use .deep because it's an object which 
        expect(actual).to.deep.equal(expected)
    })

    // test for a simple string
    it('return the correct letter count for a word with only one of each letter', () => {
        const expected = { c: 1, a: 1, t: 1 }
        const actual = getLetterCount('cat')
        expect(actual).to.deep.equal(expected)
    })

    // test for a more complex string
    it('return the correct letter count for a word with multiple of each letter', () => {
        const expected = { b: 1, e: 2, t: 2, r: 1 }
        const actual = getLetterCount('better')
        expect(actual).to.deep.equal(expected)
    })
})