export function isPalindrone(word) {
    if(!/^[A-Za-z]+$/.test(word))
        throw new Error("Invalid input")
    return word == word.toLowerCase().split('').reverse().join('');
}