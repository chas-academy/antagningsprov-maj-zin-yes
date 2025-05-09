/**
 * @returns {Object} - An object containing three arrays
 * @property {number[]} bigEven - contains numbers greater than 10 and even
 * @property {number[]} smallOdd - contains numbers less than 10 and odd
 * @property {number[]} other - contains all other numbers
 */
function uppg10() {
  const numbers = [5, 12, 7, 10, 20, 9, 11];

  // skapa tre arrayer - bigEven, smallOdd, other
  const bigEven = [];
  const smallOdd = [];
  const other = [];

  // loopa igenom numbers och placera talen i respektive array
  numbers.forEach((num) => {
    if (num > 10 && num % 2 === 0) {
      // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
      bigEven.push(num);
    } else if (num < 10 && num % 2 !== 0) {
      // smallOdd ska innehålla tal mindre än 10 och udda
      smallOdd.push(num);
    } else {
      // other ska innehålla alla andra tal
      other.push(num);
    }
  });

  // returnera ett objekt med de tre arrayerna
  return {
    bigEven,
    smallOdd,
    other,
  };
}

module.exports = { uppg10 };
