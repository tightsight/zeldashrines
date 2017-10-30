var ALL_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
var CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
var COMMON_CONSONANTS = 'bcdfghjklmnprstvwyz';
var VOWELS = 'aeiou'; // no y
var KEY_CODE_N = 110;

function randomLetter(){
  return ALL_LETTERS.charAt(Math.floor(ALL_LETTERS.length * Math.random()));
}

function randomConsonant(){
  return COMMON_CONSONANTS.charAt(Math.floor(COMMON_CONSONANTS.length * Math.random()));
}

function randomVowel(){
  return VOWELS.charAt(Math.floor(VOWELS.length * Math.random()));
}

function randomDoubleVowel(){
  var v = VOWELS.charAt(Math.floor(VOWELS.length * Math.random()));
  return v + v;
}

function randomArrayElement(array){
  if(array.length <= 0){
    alert('Error: Trying to get element from empty array.');
  }

  return array[Math.floor(array.length * Math.random())];
}

var SYLABBLE = [
  [randomDoubleVowel, randomConsonant, randomVowel], [randomVowel, randomConsonant, randomDoubleVowel], [randomConsonant, randomVowel, randomConsonant, randomVowel],
  [randomVowel, randomConsonant, randomVowel], [randomConsonant, randomVowel, randomConsonant], [randomConsonant, randomVowel, randomConsonant, randomConsonant, randomVowel]
]

function randomSyllable(){
  var choice = randomArrayElement(SYLABBLE);

  var result = choice.reduce(function(stringSoFar, val){
    return stringSoFar + val();
  }, "");
  
  return result;
}

function repeatWord(firstWord){
  return firstWord;
}

var WORD = [
  [randomSyllable], [randomSyllable, randomSyllable], [randomSyllable, randomSyllable, randomSyllable]
]

function randomWord(){
  return randomArrayElement(WORD).reduce(function(stringSoFar, val){
    return stringSoFar + val();
  },"");
}

function shortNoun(){
  var shortNoun = randomArrayElement(COMMON_NOUNS);
  while(shortNoun.length > 5) shortNoun = randomArrayElement(COMMON_NOUNS);

  return shortNoun;
}

var SHRINE_NAME = [
  [randomSyllable, randomSyllable], [randomSyllable, repeatWord], [randomSyllable, shortNoun], [shortNoun, randomSyllable]
]

function generateShrineName(){
  return randomArrayElement(SHRINE_NAME).reduce(function(stringSoFar, val){
    return (stringSoFar + " " + val(stringSoFar)).trim();
  }, "");
}

/*

--Shrines that could work

X's Teaching, Tempered Power, Drawing Parabolas, Buried Secrets, Build and Release, Electric Path
Aim for the Moment, Metal Makes a Path, Swinging Flames, Passing the Flame,

*/

var ZELDA_ENEMIES = ["Moblin", "Bokoblin", "Lizalfos", "Keese", "Wolf", "Talus", "Yiga", "Lynel", "Hinox", "Octorok", "Gaurdian", "Chuchu"];
var BODY_PARTS = ["Kidney", "Intestine", "Spleen", "Finger", "Toenail", "Thorax", "Loin", "Lip", "Eyelid", "Eyeball", "Hair", "Jelly", "Femur", "Mole", "Bunion"];
var OBJECTS = ["Bomb", "Arrow", "Mushroom", "Apple", "Acorn", "Korok Leaf", "Korok Seed", "Rock Salt",
 "Dubious Food", "Ancient Core", "Ancient Screw", "Amber", "Goat Butter", "Frog", "Cricket", "Milk", "Fairy" ];

var WEAPON_TYPES = ["Traveler's", "Soldier's", "Child's", "Commoner's", "Farmer's", "Beggar's", "Knight's", "Royal", "Forest Dweller's", "Lynel", "Rusty", "Gaurdian", "Boko", "Ancient"]
var WEAPONS = ["Spear", "Bow", "Torch", "Branch", "Broadsword", "Hoe", "Sword", "Boomerang", "Halberd", "Claymore", "Bladesaw", "Club", "Battle Axe"];

var NOUN_GROUPS = [
  [WEAPON_TYPES, WEAPONS], [ZELDA_ENEMIES, BODY_PARTS], [OBJECTS]
]

function getZeldaNoun(){
  return randomArrayElement(NOUN_GROUPS).reduce(function(stringSoFar, val){
    return (stringSoFar + " " + randomArrayElement(val)).trim();
  }, "");
}

var WRITTEN_NUMBERS = ["two", "two", "three", "three", "four", "four", "five", "six", "seven", "eight", "nine", "Six and a half",
"ten", "eleven", "twenty", "fifty five", "two hundred", "ten thousand", "Two Million", "A Billion" ]

var CONTINUOUS_VERBS = ["Thinking", "Dying", "Shooting", "Running", "Swimming", "Climbing", "Flying", "Walking", "Jogging", "Horse Soothing", "Horse Riding"];


function challengeStrength(shrineName){
  return randomArrayElement(ADJECTIVES) + " test of strength";
}

function challengeHaltTheTilt(shrineName){
  return randomArrayElement(VERBS) + " the " + getZeldaNoun();
}

function challengePathOf(shrineName){
  return "Path of " + randomArrayElement(ADJECTIVES) + " " + getZeldaNoun()+"s";
}

function challengeNumeric(shrineName){
  return randomArrayElement(WRITTEN_NUMBERS) + " " + getZeldaNoun() +"s";
}

function challengeTrial(shrineName){
  return "Trial of the " + randomArrayElement(COMMON_NOUNS);
}

function challengeBlessing(shrineName){
  return shrineName + "'s Blessing";
}

function challengeApparatus(shrineName){
  return shrineName + "'s Apparatus";  
}

function challengeIsCritical(shrineName){
  return randomArrayElement(COMMON_NOUNS) + " is Critical";
}

function challengeGuide(shrineName){
  return randomArrayElement(WRITTEN_NUMBERS) + " " +getZeldaNoun()+"s to Guide You";
}

var SHRINE_CHALLENGES = [challengeBlessing, challengeGuide, challengeApparatus, challengeIsCritical, challengeNumeric, challengeTrial, challengePathOf, challengeHaltTheTilt, challengeStrength]
function getShrineChallenge(shrineName){
  return randomArrayElement(SHRINE_CHALLENGES)(shrineName);
}

function generate(){

  var shrineName = generateShrineName();
  var shrineChallenge = getShrineChallenge(shrineName);

  var nameElements = document.getElementsByClassName('shrine-title');
  for(var i=0;i<nameElements.length;i++) {
    nameElements[i].innerHTML = shrineName;
  }

  document.getElementById('challenge').innerHTML = shrineChallenge;

  setOpacity(1);
}

function setOpacity(val){
  var nameElements = document.getElementsByClassName('animate');
  for(var i=0;i<nameElements.length;i++) {
    nameElements[i].style.opacity = val;
  }
}

function generateAnimation(){
  setOpacity(0);
  window.setTimeout(generate, 1000);
}

document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('subtitle').addEventListener('click', function(e){
    generateAnimation();      
  });

  document.addEventListener("keypress", function(e){
    if(e.keyCode == KEY_CODE_N){
      generateAnimation();
    }
  });
});