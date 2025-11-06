const person = {
    name: 'Kalam',
    age: 33,
    profession: 'Devloper ',
    salaray: 30000,
    married: true,
    'fav place': ['banddarban', 'sundarban', 'kuakata']
}


person.salaray = 400000;
person['age'] = 44;
person["fav place"] = ['maldives', 'bali', 'barmoda', 'pataiya']




const propName = 'profession';
person[propName] = 'devops'
console.log(person)