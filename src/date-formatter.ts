// ./src/date-formatter.ts

/* List of all available parsing tokens
-----------------------------------------
Input   Example             Description
-----------------------------------------
YY	    01	                Two-digit year
YYYY	  2001	              Four-digit year
MM	    01-12	              Month, 2-digits
MMM	    Jan-Dec	            The abbreviated month name
D	      1-31	              Day of month
DD	    01-31	              Day of month, 2-digits
*/

export function formatDate(format: string, date: Date): string {
	return (format = format
		.replace(/YYYY/g, date.getFullYear().toString())
		.replace(/YY/g, date.getFullYear().toString().slice(-2))
		.replace(/MMM/g, date.toLocaleString("en-us", { month: "short" }))
		.replace(/MM/g, (date.getMonth() + 1).toString().padStart(2, "0"))
		.replace(/DD/g, date.getDate().toString().padStart(2, "0"))
		.replace(/D/g, date.getDate().toString()));
}
