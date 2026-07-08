import * as readline from 'readline';

function fizzbuzzPart1(): void {
    for (let i=1; i<=100; i++)
    {
        if(i%5===0 && i%3===0)
        {
            console.log("FizzBuzz");
        }
        else if(i%5===0)
        {
            console.log("Buzz");
        }
        else if(i%3===0)
        {
            console.log("Fizz");
        }
        else
        {
            console.log(i);
        }
    }
}

const rules=new Map([
    [3,"Fizz"],
    [5,"Buzz"],
    [7,"Bang"],
]);

function fizzbuzz2(): void {
    for (let i=1; i<=256; i++)
    {
        const words:string[] = [];
        if(i%11===0) {
            words.push("Bong");
        }else for (const [number, phrase] of rules)
        {
            if(i%number===0)
            {
             words.push(phrase);
            }
        }

        if(i%13===0)
        {
            const index=words.findIndex(word => word.startsWith("B"));
            if(index===-1)
            {
                words.push("Fezz");
            }
            else
            {
                words.splice(index,0,"Fezz");
            }
        }
        if(i%17===0)
        {
            words.reverse();
        }

        console.log(words.length ? words.join('') :i);

    }
}

function fizzbuzzMaximumNumber(number:number): void {
    for (let i = 1; i <= number; i++) {
        const words: string[] = [];
        if (i % 11 === 0) {
            words.push("Bong");
        } else for (const [number, phrase] of rules) {
            if (i % number === 0) {
                words.push(phrase);
            }
        }

        if (i % 13 === 0) {
            const index = words.findIndex(word => word.startsWith("B"));
            if (index === -1) {
                words.push("Fezz");
            } else {
                words.splice(index, 0, "Fezz");
            }
        }
        if (i % 17 === 0) {
            words.reverse();
        }

        console.log(words.length ? words.join('') : i);

    }
}

//fizzbuzzPart1();
//fizzbuzz2();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForNumber(prompt: string): void {
    rl.question(prompt, (input: string) => {

        const num = Number(input.trim());
        if (Number.isNaN(num)) {
            console.log("Invalid input. Please enter a valid number.");
            askForNumber(prompt); // Ask again
        } else {
            fizzbuzzMaximumNumber(num);
            rl.close();
        }
    });
}

askForNumber("Enter a number: ");