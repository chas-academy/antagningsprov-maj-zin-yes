function uppg5() {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);

  // skriv en if-sats som jämför två tal
  if (a > b) {
    // om det första talet är större än det andra, skriv ut "Det första talet är större än det andra"
    console.log("Det första talet är större än det andra");
  } else {
    // annars skriv ut "Det andra talet är större än det första"
    console.log("Det andra talet är större än det första");
  }
}

module.exports = { uppg5 };
