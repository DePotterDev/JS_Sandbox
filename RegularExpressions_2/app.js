let re;
// Litteral Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; //Must start with
re = /world$/i; //Must end with
re = /^hello$/i; // Must begin and end with
re = /h.llo/i; // Matches any one character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y?\?/i; // Escape Characters

// Brackets [] - Character Sets
re = /gr[ae]y/i; // must be an a or e
re = /[GF]ray/; // must be an G or F
re = /[^XC]ray/i; // match anything except G or F
re = /[A-Z]ray/; // match any uppercase letter
re = /[a-z]ray/; // match any lowercase letter
re = /[A-Za-z]ray/; // match any  letter of any case
re = /[0-9][0-9]ray/; // match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; //must occur exactly {m} amount of times > Hel{l}o
re = /Hel{2,4}o/i; //must occur exactly {m} amount of times
re = /Hel{2,}o/i; //must occur at least {m} times

// Parentheses () - Grouping
re = /([0-9]x){3}/

// Shorthand Character Classes
re = /\w/; //word character - alphanumeric or underscore
re = /\w+/; // + = one or more
re = /\W/; // Non word character - alphanumeric or underscore
re = /\d/; //match any digit 
re = /\d+/; // + = match any digit 0 or more times
re = /\D/; // match any none-digit
re = /\s/; // match whitespace char
re = /\S/; // match none-whitespace char
re = /Hell\b/i; //Word boundary 

// Assertions
re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only if NOT followed by y

// String to match
const str = 'bcjdbx';

// Log Results
const result = re.exec(str);
console.log(result);


function reTest(re, str){
    if(re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    }else{
        console.log(`${str} does NOT matched ${re.source}`);
    }
}


reTest(re, str);