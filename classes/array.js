// Your code here
Array.prototype.isEqual = function (array) {
    if(this.length !== array.length)
        return false

    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        if(array[i] !== element)
            return false
    }

    return true
}