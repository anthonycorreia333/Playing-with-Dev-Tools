const dogs = [
    { name: 'Snickers', age: 2 }, 
    { name: 'hugo', age: 8 }
];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('hello');

    // Interpolated w/ ES6 and standard JS
    console.log('Hello I am %s man', 'shit');
    console.log(`Hello my name is ${dogs}`);

    // Styled
    console.log('%c Hello I am big text', 'font-size: 50px')

    // warning!
    console.warn('OH, NO!!!');

    // Error :|
    console.error('You suck!');

    // Info
    console.info('Here\'s the dope');

    // Testing
    const p = document.querySelector('p')
    console.assert(1 === 2, 'NO. That is not correct');
    console.assert(p.classList.contains('ouch'), 'That is incorrect');

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
        console.group(`${dog.name}`)
        console.log(`${dog.name}`);
        console.log(`This is ${dog.name} and is ${dog.age * 7} years old in dog years! ${dog.age}`);
        console.groupEnd(`${dog.name}`);
    })

    // counting
    console.count('Steve');
    console.count('Bob');
    console.count('Steve');
    console.count('Bob');
    console.count('Steve');
    console.count('Steve');
    console.count('Steve');

    // timing
    console.time('Retrieving Data');
    fetch('http://api.github.com/users/anthonycorreia333')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('Retrieving Data')
            console.table(data);
        })

    console.table(dogs);







