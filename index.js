// Code your solution here
function findMatching(arr, name) {
    return arr.filter(e => e.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(arr, letters) {
    return arr.filter(e => e.indexOf(letters) === 0)
}

function matchName(arr, name) {
    return arr.filter(e => e.name === name)
}