// Given a map
// change the map so that
//    each word in the array appears as a key in the map,
//    and the value for each key is an array containing the word.

// write code here that will make the given map look like the map below
const map = {};

const words = ["dog", "cat", "rabbit"];

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    map[word] = [word];
}

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    
    if (word in map) { 
        map[word].push(word);

    } 
    else {
        map[word] = [word]; 
    }
}
