/*******************
 * YOUR CODE HERE! *
 *******************/

function yell(string){
yell = string + "!";
return yell;
};

function getFirstCharacter(string){
getFirstCharacter = string[0];
return getFirstCharacter;
};

function getLastCharacter(string){
getLastCharacter = string[string.length-1];
return getLastCharacter;
};

function getOneCharacter(string,num){
return string[num];
};

function getTwoCharacters(string,num1,num2){
return string[num1]+string[num2];
};

function makeCapitalized(string){
makeCapitalized = string.toUpperCase();
return makeCapitalized;
};

function yellLouder(string){
  yellLouder = string.toUpperCase() + "!!!";
  return yellLouder;
};

function getInitials(){
  
}



/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
