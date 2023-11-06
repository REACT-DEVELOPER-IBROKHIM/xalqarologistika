function generateId(totalNumber, maxNum, addition){
    return (addition ? addition : "0") + `${totalNumber}`.padStart(maxNum - 1, "0")
}

module.exports = generateId;