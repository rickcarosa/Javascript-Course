var a = 'hello world';
console.log(a)

// 'undefined' means variable hasn't been set

if(a === undefined) {
    console.log('a is undefined')
}
else{
    console.log('a is defined')
}

// if value of a is set it is true
// if var a is never typed, a is not in memory and javascript engine says err, a is not defined
// if var a has no value, it will be 'undefined'