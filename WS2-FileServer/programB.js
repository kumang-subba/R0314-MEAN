import { readFileSync } from "fs";

console.log("1. Taking the customer's order.");
const data = readFileSync("example.txt", "utf8").replace("\n", "");
console.log("2. Food is ready! Here is the file content:", data);
console.log("3. FINALLY, I can serve other tables.");
console.log("4. Refilling drinks for another customer.");
