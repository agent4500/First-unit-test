export function findMissingNumber(arr) {
 
  const set = new Set(arr);
  const n = set.size + 1;
  const totalSum = (n * (n + 1)) / 2;
  const arrSum = Array.from(set).reduce((acc, num) => acc + num, 0);
  return totalSum - arrSum;
}

export function calculateExpression(expression) {
 
  return eval(expression);
}

export const fibonacci = (num) => {

  if (num <= 1) return [0];
  if (num === 2) return [0, 1];
  const fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

export const capitalizeWords = (sentence) => {
  
  return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export const sortNestedArray = (arr) => {
  
  return arr.map(subArr => subArr.slice().sort((a, b) => a - b));
}

export const reverseSentenceWords = (sentence) => {

  return sentence.split(' ').reverse().join(' ');
}

export const mergeDistinctArrays = (arr1, arr2) => {

  return Array.from(new Set([...arr1, ...arr2]));
}

export const calculateAge = (d, m, y) => {
 
  const birthDate = new Date(Date.parse(`${y}-${m}-${d}`));
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const months = today.getMonth() - birthDate.getMonth();
  const days = today.getDate() - birthDate.getDate();
  if (months < 0) {
    age -= 1;
    months += 12;
  }
  if (days < 0) {
    months -= 1;
    days += 30;
  }
  return `You have ${age} years, ${months} Months and ${days} days`;
}

export const longestString = (str) => {

  const regex = /((\w)\2*)/g;
  let longestStr = '';
  let match;
  while ((match = regex.exec(str))!== null) {
    if (match[1].length > longestStr.length) {
      longestStr = match[1];
    }
  }
  return longestStr;
}

export const getSumOfRandom = (num) => {
  
  return Array(num + 1).fill(0).reduce((acc, _, i) => acc + Math.floor(Math.random() * num), 0);
}