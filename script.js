const persons = [{
        imie: 'kuba',
    },
    {
        imie: 'jacek',
    },
    {
        imie: 'piotr',
    },
    {
        imie: 'ania',
    },
    {
        imie: 'magda',
    },
    {
        imie: 'emilka',
    },
    {
        imie: 'michal',
    },
    {
        imie: 'jaroslaw',
    },
    {
        imie: 'robert',
    },
    {
        imie: 'kasia',
    },
];

persons.forEach((persons, index) => {
    const p = document.createElement('p')
    const cont = document.querySelector('.persons__cont')
    p.innerText = `${index + 1}. ${persons.imie}`
    cont.appendChild(p)
    p.classList.add('person')
    
})

// pętle zagnieżdżone
let x = '*'
for (i = 1; i <= 5; i++) {
    console.log(x)
    x += '*'
}
x = '*****'
for (i = 1; i <= 5; i++) {
    console.log(x.slice(i - 1))
}
for (i = 1; i <= 5; i++) {
    let x = '1 2 3 4 5'
    console.log(x + " ".repeat(i))
}