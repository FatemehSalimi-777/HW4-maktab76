function removeSameCharacter(string, searchString) {
    let index = string.indexOf(searchString);
    if (index === -1) {
        return string;
    }
    return string.slice(0, index) + string.slice(index + searchString.length);
}
console.log(removeSameCharacter("The quick brown fox jumps over the lazy dog", 'the'));
