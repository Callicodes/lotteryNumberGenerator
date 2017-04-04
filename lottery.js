var input1 = prompt("Think of your Mum's Birthday?");
var bottomNumber = parseInt(input1);

var input = prompt("Think of someone else's Birthday");
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + 1 + bottomNumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</P>";
document.write(message);
