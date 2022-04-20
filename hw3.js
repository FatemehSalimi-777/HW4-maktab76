let string = 'the quick brown fox';
function capitalize(string) {
    let array = string.split(" ");
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    return array.join(" ");
}

console.log(capitalize(string));