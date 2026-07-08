import * as readline from 'readline';

const rules=new Map([
    [3,"Fizz"],
    [5,"Buzz"],
    [7,"Bang"],
]);

export function applyRules(num: number, applyRules:number[]):string {
    const words:string[] = [];
    if(num%11===0) {
        words.push("Bong");
    }else for (const [number, phrase] of rules)
    {
        if(applyRules.includes(number) && num%number===0)
        {
            words.push(phrase);
        }
    }

    if(applyRules.includes(13) && num%13===0)
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
    if(num%17===0)
    {
        words.reverse();
    }

    return (words.length ? words.join('') :num.toString());

}

function fizzbuzzPart1(): void {
    for (let i=1; i<=100; i++) applyRules(i,[3,5]);
}

function fizzbuzz2(): void {
    for (let i=1; i<=256; i++) console.log(applyRules(i,[3,5,7,11,13,17]));
}

function fizzbuzzMaximumNumber(number:number): void {
    for (let i = 1; i <= number; i++) console.log(applyRules(i, [3,5,7,11,13,17]));
}

function fizzbuzzChooseRule(numberArray:number[]): void {
    for (let i = 1; i <= 256; i++) console.log(applyRules(i, numberArray));
}


//fizzbuzzPart1();
//fizzbuzz2();

const rl = readline.createInterface({
   input: process.stdin,
    output: process.stdout
});




/*function askForNumber(prompt: string): void {
    rl.question(prompt, (input: string) => {

        const num = Number(input.trim());
        if (Number.isNaN(num)) {
            console.log("Invalid input. Please enter a valid number.");
            askForNumber(prompt);
        } else {
            fizzbuzzMaximumNumber(num);
            rl.close();
        }
    });
}

askForNumber("Enter a number: ");

 */

function checkForAvailableRules(num:number): boolean {

        return !(num != 3 && num !== 5 && num !== 13);
}

function askForRules(prompt: string): void {
    rl.question(prompt, (input: string) => {
        try {

            const numArray: number[] = input
                .split(",")
                .map(v => v.trim())
                .filter(v => v.length > 0)
                .map(v => {
                    const num = Number(v);
                    if (isNaN(num) || !checkForAvailableRules(num)) {
                        throw new Error(`Invalid rule: "${v}"`);
                    }
                    return num;
                });
            fizzbuzzChooseRule(numArray);
        }catch (err) {
        console.error("Error:", (err as Error).message);
    } finally {
        rl.close();
    }
    });
}

//askForRules("Please choose the rules separated by comma that you want to apply (3,5,13): ");
