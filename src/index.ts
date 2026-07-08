import * as readline from 'readline';

const rules=new Map([
    [3,"Fizz"],
    [5,"Buzz"],
    [7,"Bang"],
]);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function applyRules(num: number, applyRules:number[]):string {
    const words:string[] = [];
    if(num%11===0) {
        words.push("Bong");
    }else for (const [number, phrase] of rules) {
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

function fizzBuzz(maximumNumber:number, rulesArray:number[]): void {
    for (let i = 1; i <= maximumNumber; i++) console.log(applyRules(i, rulesArray));
}

function askForNumber(prompt: string): void {
    rl.question(prompt, (input: string) => {

        const num = Number(input.trim());
        if (Number.isNaN(num)) {
            console.log("Invalid input. Please enter a valid number.");
            askForNumber(prompt);
        } else {
            fizzBuzz(num,[3,5,7,11,13,17]);
            askMenu();
        }
    });
}

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
            fizzBuzz(256,numArray);
        }catch (err) {
        console.error("Error:", (err as Error).message);
    } finally {
            askMenu();
    }
    });
}

function showMenu(): void {
    console.log("\n=== Main Menu ===");
    console.log("1. Numbers up to 100 with only the 3 & 5 Rules");
    console.log("2. Numbers up to 256 with all the number Rules");
    console.log("3. Prompt the maximum number with all the  Rules");
    console.log("4. Choose which rules to use between 3,5 and 13");
    console.log("0. Exit");
}

function handleChoice(choice: number): void {
    switch (choice) {
        case 1:
           fizzBuzz(100,[3,5]);
            break;
        case 2:
            fizzBuzz(256,[3,5,7,11,13,17]);
            break;
        case 3:
            askForNumber("Enter a number: ");
            break;
        case 4:
            askForRules("Please choose the rules separated by comma that you want to apply (3,5,13): ");
            break;
        case 0:
            rl.close();
            return;
        default:
            console.log("Invalid choice. Please select a valid option.");
    }
    askMenu();
}

function askMenu(): void {
    showMenu();
    rl.question("Enter your choice: ", (input) => {
        const choice = Number(input);
        if (isNaN(choice)) {
            console.log("Invalid input. Please enter a number.");
            return askMenu();
        }
        handleChoice(choice);
    });
}


askMenu();