const sectence = 'I am learning we Dev.'

// const result = '.veD beW gninrel ma I'



// for (const letter of sectence){
//     console.log(letter)
// }

let reverse = ''
for (const kkd of sectence){
    reverse = kkd + reverse 
}
console.log(reverse)


let rev = ''
for (let i = 0 ; i < sectence.length ; i++){
    // console.log(i)
    // console.log(sectence[i]);
    const ddk = sectence[i]
    rev = ddk + rev
}
console.log(rev.toLowerCase())
console.log(rev)

const reversed = sectence.split('').reverse().join('')
console.log(reversed)