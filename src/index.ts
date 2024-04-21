// export function greet(name: string): string {
// 	return `Hello, ${name}!`;
// }

// console.log(greet("World"));
// console.log(formatDate("YYYY-MM-DD", new Date()));
import { formatDate } from "./date-formatter.js"; // <-- .js

// Outputs the current date in "YYYY-MM-DD" format
const fmt1 = formatDate("YYYY-MM-DD", new Date());
console.log({ fmt1 });

// Outputs "11-Jan-24"
const fmt2 = formatDate("DD-MMM-YY", new Date("2024-01-11"));
console.log({ fmt2 });

console.log('formatDate("YYYY-MM-DD", new Date()) ->', fmt1);
console.log('formatDate("DD-MMM-YY", new Date("2024-01-11")) ->', fmt2);
