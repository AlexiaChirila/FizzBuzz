import {applyRules} from './index'

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(applyRules(3)).toBe('Fizz');
});