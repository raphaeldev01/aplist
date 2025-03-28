const Random = (arr) => {    
    if(!arr) return null

    const random = Math.floor(Math.random() * arr.length);
    return {word: arr[random]};
}

module.exports = {Random};