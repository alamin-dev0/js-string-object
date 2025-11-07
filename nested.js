const school = {
    name: 'Iqra',
    class: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    events: ['scince fair', 'bijoy dibos', '12 february'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

// console.log(school.unique.color)
school['unique'].result.merit = 'Top top top most'
console.log(school.unique.result.merit)
// console.log(school.unique.result.gpa)

school.events[1] = '16 december'
console.log(school.events[1])

delete school.class
delete school['events']
console.log(school)