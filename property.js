const person = {
    name: 'Kalam',
    age: 33,
    profession: 'Devloper ',
    salaray: 30000,
    married: true,
    'fav place' : ['banddarban' , 'sundarban', 'kuakata']
}


// not notation 
// dont symble diye object er property er value access kora
// console.log(person.salaray)
const seKe = person.name
// console.log(seKe)


// bracket notation 
//third bracket diye access kora

// console.log(person['age'])
// const boyos = person['age']
// console.log(boyos)



//error 
// console.log(person.fav place)
// console.log(person['fav place'])


const keyName = 'profession'
console.log(person[keyName])