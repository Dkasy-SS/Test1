let stringForGames = "word1 word2 word3 word4 word5 word6 word7";
let stirng2 = 'word8'
let string3 = 'word9 word10'
let string4 = 'word11 word12 word15'
let arrToPass = [stringForGames, stirng2, string3, string4]


// Feature to split the sting and compare both parths summ together
const summNumbers = (str) => {
    let arr = str.split('');
    arr = arr.map((item)=>{
        return Number(item)
    })
    console.log(arr)

    new Promise((resolve, reject)=>{
        console.log('start')
        console.log(arr)
        if(arr.every((item)=>{
            return item !== NaN
        })){
            console.log('All items are numbers, let go')
            if (arr.length % 2 === 0){
                resolve(arr.splice(arr.length/2))
            } else {
                reject('Provide an even number(a number that can be devide by 2)')
            }
        } else {
            console.log('Enter string with only numbers inside')
        }
    })
    .then((arrA)=>{
        let arr2 = arrA;
        let tempNum = 0;
        let tempNum2 = 0;
        for(let i=0; i<arr.length; i++){
            tempNum += Number(arr[i])
            tempNum2 += Number(arr2[i])
        }
        console.log(tempNum +' '+ tempNum2)
        if(tempNum>tempNum2){
            console.log(`Number 1 - ${tempNum} is biggern than Number 2 - ${tempNum2}`)
        } else {
            console.log(`Number 2 - ${tempNum2} is bigger than Number 1 - ${tempNum}`)
        }
    }).catch((error)=>{
        console.log(error)
    })
}

summNumbers('12345678')

// Reverse each second word of the string

const reverseString = (...str) => {
    let arr = []
    if(str.length>1){
        for(let i=0; i<str.length; i++){
            arr[i] = str[i]
        }
        arr = arr.join().replace(/,/g,' ').split(' ')
        for (i=1; i<arr.length; i+=2){
        arr[i] = arr[i].split('').reverse().join('')
        }
        return arr
    } else {
        arr = str.join().replace(/,/g,' ').split(' ')
        for (i=1; i<arr.length; i+=2){
        arr[i] = arr[i].split('').reverse().join('')
        }
        return arr
    }
}



// Count fibo to the 4181

let arrFibo = [0, 1]

const fiboContinue = (arr) => {
    let tempNum = arr[arr.length-1] + arr[arr.length-2]
    arrFibo.push(tempNum)
    if(arr[arr.length-1]!=4181){
        fiboContinue(arr)
    }
    else {
        console.log(arr)
    }
}

// fiboContinue(arrFibo)
