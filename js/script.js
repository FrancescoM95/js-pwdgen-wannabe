console.log('JS OK')

//* 1. Chiediamo all'utente il suo nome. 

const firstname = prompt('Come ti chiami?');
console.log(firstname);

//* 2. Chiediamo all'utente il suo cognome. 

const lastname = prompt('Qual è il tuo cognome?');
console.log(lastname);

//* 3. Chiediamo all'utente il suo colore preferito.

const color = prompt('Qual è il tuo colore preferito?');
console.log(color);

//* 4. Generiamo una password con i dati forniti dall'utente + il numero '23'.

const userpassword = firstname + lastname + color + '23'
console.log(userpassword);

//* 5. Inseriamo la password generata preceduta da un breve messaggio in un titolo da stampare in pagina.

document.getElementById('password').innerText = 'La tua password è: ' + (userpassword);
console.log(password);