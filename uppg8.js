function uppg8() {
  // skapa en array med fem person obkjet
  // varje person objekt ska ha två properties, name och age
  /**
   * @typedef {Object} Person
   * @property {string} name - Name of the person
   * @property {number} age - Age of the person
   */
  const people = [
    { name: "Hasse", age: 25 },
    { name: "Hasselnöt", age: 35 },
    { name: "Hasselbakspotatis", age: 40 },
    { name: "Hasselblomma", age: 28 },
    { name: "Hasselmus", age: 32 },
  ];

  // skapa en fuktion som tar in en array som argument
  /**
   * @param {Person[]} arr - An array of person objects
   */
  const func = (arr) => {
    // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
    //  över 30 år som skrivs ut i konsolen
    arr.forEach((person) => {
      if (person.age > 30) {
        console.log(person.name);
      }
    });
  };

  // anropa funktionen och skicka med arrayen som argument
  func(people);
}

module.exports = { uppg8 };
