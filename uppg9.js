function uppg9() {
  // skapa en funktion som heter sort och tar in en array av siffror som argument
  /**
   * @param {number[]} arr - An array of numbers
   */
  const sort = (arr) => {
    arr.forEach((num) => {
      // i funktionen du loopa igenom arrayen och kolla med en if-sats om talet är jämt eller udda
      // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"
      // i if-sattsen skriv ut i konsolen resultatet
      if (num % 2 === 0) {
        console.log(num, "jämt");
      } else {
        console.log(num, "udda");
      }
    });
  };

  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }

  // anropa funktionen och skicka med en array som argument
  sort(arr);
}

module.exports = { uppg9 };
