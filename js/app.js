'use strict';

var userName = prompt('Hi! Welcome! I\'m Sam! What is your name?');
alert('Hi, ' + userName + '! I\'m glad you are here! Let\'s play a guessing game so that you can learn more about me.');
console.log('The user\'s name is '+ userName);

var answerOne = prompt('Guess this about me: have I ever been on a vacation to Key West?').toLowerCase();

if (answerOne === 'y' || answerOne === 'yes'){
  alert('You\'re right, ' + userName + '! In fact, I am going back there in about 4 weeks!');
  console.log('User got the correct answer to #1');
} else {
  alert('Sorry, ' + userName + ', that is incorrect. I was last there in July 2018');
  console.log('User got the incorrect answer to #1');
}

