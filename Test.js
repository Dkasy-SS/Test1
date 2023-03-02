var stringToReverse = 'First second third forth fivth six seven';

const reverseString2 = (str) => {
    var arrayFromString = str.split(" ");
    for (let i = 1; i<arrayFromString.length; i+=2){
        let tempStr = arrayFromString[i].split('').reverse().join('')
        arrayFromString[i] = tempStr
    }
    return arrayFromString.join(' ')
}

console.log(reverseString2(stringToReverse))

console.log("The count of i in string =" + " " + stringToReverse.match(/i/g).length)


var fiboArr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]

const fiboContinue = (arr) => {
    for (var i = fiboArr.length-1; arr[i]<610; i++){
        arr.push(arr[i] + arr[i-1]);
        console.log(arr)
    }
}

fiboContinue(fiboArr);

const drowPiramide = (lines) => {
    var output = ''
    for (let i=1; i<=lines; i++){
        let str = ' '.repeat(lines-i);
        let str2 = '*'.repeat(i*2-1);
    
        console.log(str + str2);
    }
}

drowPiramide(10)