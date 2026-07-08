# FizzBuzz
FizzBuzz is a short program that assigns a message to a number based on a couple of rules such as:

* If a number is a multiple of 3, it prints "Fizz" instead of the number;
* If the number is a multiple of 5, it prints "Buzz" instead of the number;
* For numbers which are multiples of both 3 and 5 print "FizzBuzz" instead of the number;
* If a number is a multiple of 7, it prints "Bang" instead of the number;
* For numbers which are multiples of 7 and 3 / 5, append Bang to what you'd have printed anyway;
* If a number is a multiple of 11, it only prints "Bong" instead of the number;
* If a number is a multiple of 13, print "Fezz" instead of the number. For multiples of most other numbers, the Fezz goes immediately in front of the first thing beginning with B, or at the end if there are none;
* If a number is a multiple of 17, reverse the order in which any fizzes, buzzes, bangs etc. are printed.


# Functions and variables

I've created a short Map named rules for storing the number and rules associeted, only for the rules that add a word without changing the structure already created.


For generating the message I created a function named **applyRules** which has 2 params, one is the number for which we want the message and the other is the numeric list of rules we want to apply. 
In this function, I create a list of strings by following the rues in this order:
* The 11 rule because it should not have anything else besides the "Bong" word.
* The 3,5,7 rules
* The 13 rule, which looks for a word starting with letter B. If it finds one, it adds the specific word before the B word. Otherwise it pushes it to the back of the list
* The 17 rule, due to the fact that it reverse the words order
In the end, if the list is empty the function returns the number itself as a string. If the list is not empty, it return the words joined together.

The main function of the app is **fizzBuzz** which receives the maximum number of umbers to be genrated and the list of rules to be applied. Here we navigate through a for loop and display in the console the messages received through the applyRules function.

For navigating the app, I've created a menu for :

* only the 3 and 5 rule for numbers up to 100
* all the rules for 256 numbers
* all the rules for a number given by the user in the console
* letting the user pass in which rules to apply for 256 numbers




# Tests

For testing, i've implemented several tests for different kinds of numbers as input and different sets of rules in the index.test.ts file. To run the tests, open the terminal and write npm run test. 
