import { styleText } from "node:util";


function printBoldBlue(text: string): void {
    console.log(styleText(["bold", "blue"], text));
}

export { printBoldBlue };
