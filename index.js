var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
return kittens
}

function destructivelyRemoveLastKitten() {
kittens.pop();
  return kittens
}
function destructivelyRemoveFirstKitten() {
kittens.shift()
return kittens;
}

function appendKitten(name) {
  var newK = [...kittens, name]
    return newK

}

function prependKitten(name) {

var newwK = [name, ...kittens]
return newwK
}

function removeLastKitten() {
  var newKittens = kittens.slice(0, 2)
  return newKittens
}

 function removeFirstKitten() {
  var newKittens = kittens.slice(1,3)
  return newKittens
}