const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
  }

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
  }
  
function destructivelyRemoveLastCat() {
    cats.pop();
  }

function destructivelyRemoveFirstCat() {
    cats.shift();
  }

function appendCat(name) {
    let newCatsAppend = [...cats, "Broom"];
    return newCatsAppend;
  }

function prependCat(name) {
    let newCatsPrepend = ["Arnold", ...cats,];
    return newCatsPrepend;
  }

function removeLastCat() {
    let newRemoveLastCat = cats.slice(0, -1);
    return newRemoveLastCat;
}

function removeFirstCat() {
    let newRemoveFirstCat = cats.slice(1);
    return newRemoveFirstCat;
}
