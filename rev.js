//to open inline chat press ctrl+I

function factorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

function fibonacciSeries(n) {
  const series = [];
  let a = 0;
  let b = 1;
  let i = 0;

  while (i < n) {
    series.push(a);
    [a, b] = [b, a + b];
    i++;
  }

  return series;
}

console.log(fibonacciSeries(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

function reverseString(str) {
  return str.split('').reverse().join('');
} 

function isPalindrome(str) {
  const reversedStr = reverseString(str);
  return str === reversedStr;
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;        

    if (num % 2 === 0 || num % 3 === 0) return false;   

    for (let i = 5; i * i <= num; i += 6) { 

        if (num % i === 0 || num % (i + 2) === 0) return false;

    }   

    return true;    
}


// Create a complete 'Daily Journal with Mood Tracker' web application using HTML, CSS and JavaScript, and Local Storage for database.
// - Use proper folder structure with files
// - Make the application looks modern
// - Desktop first but Mobile responsive.

// Style inspiration:
// Notion, Google Keep, modern journal apps

// Include pages for:
// 1. Home (We can have brief Stats and 'Add Today's Journal + Mood')
// 2. My Journal (We can view all previous Journals and Mood)
// 3. Add New Journal (We can add new Journal here)

// Note: By default it ask us for todays journal but I can select any date and fill journal and mood