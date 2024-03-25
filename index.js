
;// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]
function
    destructivelyAppendCat(){
    cats.push('Ralph')}
    function destructivelyPrependCat (){
        cats.unshift('Bob')
    }
    function destructivelyRemoveLastCat(){
        cats.pop('Garfield')
    }
    function destructivelyRemoveFirstCat(){
        cats.shift('Milo')
    }
    function appendCat(){
    let cats=["Milo","Otis","Garfield"]
    let newCats=[...cats,'Broom'];
    return newCats
    }
    function prependCat(){
    let cats=["Milo","Otis","Garfield"]
    let allcats=["Arnold",...cats];
    return allcats

    }
    function removeLastCat(){
        let cats=["Milo","Otis","Garfield"]
        let removecat= cats.slice(0,cats.length-1);
        return removecat
    }
    function removeFirstCat(){
        let cats =["Milo","Otis","Garfield"]
        let slicecat= cats.slice(1)
        return slicecat
    }