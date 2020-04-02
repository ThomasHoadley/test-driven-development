export const getLetterCount = string => {
    // use split in our function to 
    const letters = string.split('')

    // reduce our letters array to a new object
    const letterCount = letters.reduce((newObject, letter) => {
        newObject[letter] = (newObject[letter] + 1) || 1
        return newObject
    }, {})

    return letterCount
}