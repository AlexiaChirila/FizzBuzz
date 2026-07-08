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


For the first part ( only the 3 and 5 rule for numbers up to 100), I've implemented the **fizzbuzzPart1** function. Here we navigate through a for loop and display in the console the messages received through the applyRules function.


For the second part ( all the rules), I've implemented the **fizzbuzz2** function. Here we navigate through a for loop and display in the console the messages received through the applyRules function.

For prompting the user for a maximum number, I ask in the console for a number, check if it is a number and then pass the argument to the **fizzbuzzMaximumNumber** function where we navigate through a for loop and display in the console the messages received through the applyRules function.


For letting the user pass in which rules to implement, I ask in the console for a list of numbers separated by comma, split the received text, mapped it to a numeric array and check if it is one of the rules 3,5, or 13 ( ** checkForAvailableRules**. If the input is as expected, i call **fizzbuzzChooseRule** with the rules array and navigate through a for loop and display in the console the messages received through the applyRules function.


# Tests

For testing, i've implemented several tests for different kinds of numbers as input and different sets of rules in the index.test.ts file. To run the tests, open the terminal and write npm run test. 
