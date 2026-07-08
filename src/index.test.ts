import {applyRules} from './index'

test('fizzbuzz returns "Fizz" for 3', () => {
    expect(applyRules(3,[3,5,13])).toBe('Fizz');
});

test('fizzbuzz returns "BuzzFizz" for 255', () => {
    expect(applyRules(255,[3,5,7,11,13,17])).toBe('BuzzFizz');
});

test('fizzbuzz returns "FezzBong" for 143', () => {
    expect(applyRules(143,[3,5,7,11,13,17])).toBe('FezzBong');
});

test('fizzbuzz returns "FizzFezzBuzz" for 195', () => {
    expect(applyRules(195,[3,5,7,11,13,17])).toBe('FizzFezzBuzz');
});

