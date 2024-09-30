const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

const titleCased = () => {
  return tutorials.map(tutorial => {
    return tutorial
      .split(' ')
      .map(word => {
        // Capitalize the first letter of each word
        const lowerCasedWord = word.toLowerCase();
        return lowerCasedWord.charAt(0).toUpperCase() + lowerCasedWord.slice(1);
      })
      .join(' ')
      .replace(/\bOo\b/g, 'OO') // Ensure 'OO' is uppercase
      .replace(/\bApi\b/g, 'API') // Ensure 'API' is uppercase
      .replace(/\bNan\b/g, 'NaN') // Ensure 'NaN' is uppercase
      .replace(/\bJsonp\b/g, 'JSONP') // Ensure 'JSONP' is uppercase
      .replace(/\bStoppropagation\b/g, 'StopPropagation') // Ensure correct case
      .replace(/\bPreventdefault\b/g, 'PreventDefault'); // Ensure correct case
  });
};

// Example usage:
console.log(titleCased());