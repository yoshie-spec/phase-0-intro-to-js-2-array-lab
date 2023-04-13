// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
    return cats.push;
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat() {
    const moreCats = [...cats, "Broom"];  
        return moreCats;
}

function prependCat(){
    const moreCats= ["Arnold", ...cats]
    return moreCats;
}

function removeLastCat(){
const moreCats = cats.slice()
moreCats.pop()
return moreCats;
}


function removeFirstCat(){
    const moreCats = cats.slice()
    moreCats.shift()
    return moreCats;
}
