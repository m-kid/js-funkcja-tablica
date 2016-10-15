var mensNames = ['Odd', 'Rey', 'Hep', 'Burn', 'Jason', 'Jake'];
var womensNames = ['Angela', 'Alicia', 'Agnes', 'Alison', 'Ava', 'Amora'];
var coeducation = mensNames.concat(womensNames);

console.log(coeducation)

var newName = 'Johnson'
var indexOfCoeducation = coeducation.indexOf(newName);

console.log(indexOfCoeducation);

if (indexOfCoeducation < 0) {
    var x = coeducation.push(newName);
    console.log('Gratulacje! Imienia "', newName, '", które dodałeś, nie było do tej pory na naszej liście. Dopisujemy je na koniec!')
} else {
    console.log('Niestety, imię, które wpisałeś, czyli "',newName,'", znajduje się już na naszej liście (zajmuje miejsce ', indexOfCoeducation + 1, '). Lista poniżej nie powinna się różnić od listy powyżej')
}

console.log(coeducation);

