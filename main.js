var ALL_LETTERS = 'abcdefghijklmnopqrstuvwxyz';
var CONSONANTS = 'bcdfghjklmnpqrstvwxyz';
var COMMON_CONSONANTS = 'bcdfghjklmnprstvwyz';
var VOWELS = 'aeiou'; // no y
var VOWELS_WITH_Y = 'aeiouy';
var KEY_CODE_N = 110;
var KEY_CODE_S = 115;


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

function coinFlip(){
  if(Math.floor(2 * Math.random()) == 1) return true;
  return false;
}

var SYLABBLE = [
  [randomDoubleVowel, randomConsonant, randomVowel], 
  [randomVowel, randomConsonant, randomDoubleVowel], 
  [randomVowel, randomConsonant, randomVowel], 
  [randomConsonant, randomVowel, randomConsonant, randomVowel],
  [randomConsonant, randomDoubleVowel, randomConsonant, randomVowel],
  [randomConsonant, randomVowel, randomConsonant], 
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

function shortNoun(){
  var shortNoun = randomArrayElement(COMMON_NOUNS);
  while(shortNoun.length > 5) shortNoun = randomArrayElement(COMMON_NOUNS);

  return shortNoun;
}

function crazyNoun(){
  var crazyNoun = randomArrayElement(COMMON_NOUNS);
  while(crazyNoun.length > 4) crazyNoun = randomArrayElement(COMMON_NOUNS);

  crazyNoun = coinFlip() ? crazyNoun + randomArrayElement(VOWELS_WITH_Y) : randomArrayElement(VOWELS) + crazyNoun;

  return crazyNoun;
}

var SHRINE_NAME = [
  [randomSyllable, randomSyllable], [randomSyllable, repeatWord], [randomSyllable, crazyNoun],
  [crazyNoun, crazyNoun], [crazyNoun, repeatWord], [crazyNoun, randomSyllable]
]

function generateShrineName(){
  return randomArrayElement(SHRINE_NAME).reduce(function(stringSoFar, val){
    return (stringSoFar + " " + val(stringSoFar)).trim();
  }, "");
}

var ZELDA_ENEMIES = ["Moblin", "Bokoblin", "Molduga", "Lizalfos", "Keese", "Wolf", "Talus", "Yiga", "Lynel", "Hinox", "Octorok", "Gaurdian", "Chuchu"];

var BODY_PARTS = ["Kidney", "Intestine", "Spleen", "Finger", "Gut", "Meat", "Toenail", "Loin", "Lip", "Eyelid", "Eyeball", "Hair", "Jelly",
 "Femur", "Mole", "Bunion", "Extract", "Horn", "Fang", "extract"];

var OBJECTS = ["Bomb", "Arrow", "Restless Cricket", "Apple", "Acorn", "Korok Leaf", "Korok Seed", "Rock Salt", "Armored Carp", "Armored Porgy", "Diamond", "Endura Carrot",
 "Dubious Food", "Ancient Core", "Ancient Screw", "Amber", "Goat Butter", "Hylian Shroom", "Ironshroom","Mighty Bananas", "Sneaky River Snail",  "Frog", 
 "Cricket", "Milk", "Fairy", "Rupee", "Spirit Orb", "Wood", "Zapshroom", "Tireless Frog"  ];

var ZELDA_ADJECTIVES = ['Gourmet', 'Prime', 'Hearty', 'Raw', 'Mighty', 'Ancient', 'Electric', 'Hylian', 'Warm', 'Cool', 'Swift', 'Endura', 'Armored']

// carp, salmon, trout, fruit, shroom, 
// Gourmet, Prime, Hearty, Raw, Mighty, Giant, Ironshell, Razorclaw, Hyrule (Hylian), Electric, Ancient, armored, cold/cool, endura, ice, shard of , swift, voltfin, warm, yellow, whitel

var WEAPON_TYPES = ["Traveler's", "Soldier's", "Child's", "Commoner's", "Farmer's", "Beggar's", "Knight's", "Royal", "Lynel", "Rusty", "Gaurdian", "Boko", "Ancient"]
var WEAPONS = ["Spear", "Bow", "Torch", "Branch", "Broadsword", "Hoe", "Sword", "Boomerang", "Halberd", "Claymore", "Bladesaw", "Club", "Battle Axe"];

var NOUN_GROUPS = [
  [WEAPONS], [ZELDA_ENEMIES, BODY_PARTS], [OBJECTS]
]

function getZeldaNoun(){
  return randomArrayElement(NOUN_GROUPS).reduce(function(stringSoFar, val){
    return (stringSoFar + " " + randomArrayElement(val)).trim();
  }, "");
}

var WRITTEN_NUMBERS = ["two", "three", "one half", "four", "five", "six", "seven", "eighty", "nine point nine nine", "nine", "Six and a half",
"ten", "eight point two", "eleven", "fifteen", "forty two", "twenty", "fifty five", "two hundred", "ten thousand", "one point five million","two million", "A Billion" ]

var CONTINUOUS_VERBS = ["Thinking", "Dying", "Shooting", "Running", "Swimming", "Climbing", "Flying", "Walking", "Jogging", "Horse Soothing", "Horse Riding"];

/*

--Shrines that could work

X's Teaching, Tempered Power, Drawing Parabolas, Buried Secrets, Build and Release, Electric Path
Aim for the Moment, Metal Makes a Path, Swinging Flames, Passing the Flame, metal doors open the way,
path of hidden winds

1.  ___ing the flame || _____ing the Wind
2.  ___ Trial (zelda noun?)
4.  The ___ (zelda noun) guides you
5.  ____ Timing
6.  ___ Path
7.  Wind ____ OR ____ Guide 
8.  A ____ Approach (balanced)
9.  ___ Flame || ___ing flames
10.  Power of _____

*/

function challengeTheFlameWind(shrineName){
  return randomArrayElement(['flame', 'wind']) + " " + randomArrayElement(COMMON_NOUNS)
}

function challengeStrength(shrineName){
  return randomArrayElement(ADJECTIVES) + " test of strength";
}

function challengeStrengthReversed(shrineName){
  return randomArrayElement(['major', 'minor', 'modest']) + " test of " + randomArrayElement(COMMON_NOUNS)
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
  return "Trial of the " + randomArrayElement(ZELDA_ADJECTIVES) + " " + randomArrayElement(COMMON_NOUNS);
}

// Blessing / Apparatus / Teaching
function challengeBlapparatus(shrineName){
    return shrineName + "'s " + randomArrayElement(['Blessing', 'Apparatus', 'Teaching']);
}

function challengeIsCritical(shrineName){
  return randomArrayElement(COMMON_NOUNS) + " is Critical";
}

function challengeGuide(shrineName){
  return "the " + getZeldaNoun() + " guides you";
}


var SHRINE_CHALLENGES = [challengeGuide, challengeIsCritical, challengeBlapparatus, challengeTrial, challengeNumeric,  
challengePathOf, challengeHaltTheTilt, challengeStrengthReversed, challengeStrength, challengeTheFlameWind]

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

// https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
function toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

var BG_IMG_PATH = "./img/shrine2.jpg";

function generateOnCanvas(shrineName, shrineChallenge){

  var subtitle = '∼  ' + shrineName + ' Shrine  ∼';

  var img1 = new Image();
  img1.addEventListener('load', function(){
    var ctx = document.getElementById('mainCanvas').getContext('2d');
    ctx.drawImage(img1, 0,0, 960, 540);
    ctx.textAlign = "center"

    ctx.font = '48px Merriweather';
    ctx.fillStyle = "white";

    ctx.shadowColor = "#00ADFF";
    ctx.shadowBlur = 14;

    ctx.fillText(shrineChallenge, 480,150);

    ctx.font = '28px Merriweather';
    ctx.fillText(subtitle, 480,200);

  }, false);
  img1.src = BG_IMG_PATH;
}

function generateRandomShrine(){
  var shrineName = toTitleCase(generateShrineName());
  var shrineChallenge = toTitleCase(getShrineChallenge(shrineName));

  generateOnCanvas(shrineName, shrineChallenge);
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

function randomFilename(){
  return "zelda_shrine_"+randomArrayElement(COMMON_NOUNS)+".png";
}

// https://stackoverflow.com/questions/4998908/convert-data-uri-to-file-then-append-to-formdata
function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}

function saveImage(){


  var canvas = document.getElementById('mainCanvas');

  var a = document.createElement('a');
  a.href = canvas.toDataURL('image/png');
  a.download = randomFilename();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);


  // var oldSave = function(canvas){
  //   var a = document.createElement('a');
  //   var blobData = dataURItoBlob(canvas.toDataURL('image/png'));
  //   a.href = URL.createObjectURL(blobData);

  //   a.download = randomFilename();
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   document.getElementById('save-notice').style.display = "inline";
  // }

}

document.addEventListener("DOMContentLoaded", function() {


  var img1 = new Image();
  img1.addEventListener('load', function(){
    var ctx = document.getElementById('mainCanvas').getContext('2d');
    ctx.drawImage(img1, 0,0, 960, 540);
    generateOnCanvas("Press 'n' or Click Below to Generate a ", "Zelda Shrine Name Generator");

  }, false);
  img1.src = BG_IMG_PATH;


  document.getElementById('newName').addEventListener('click', function(e){
    generateRandomShrine();  
  });

  document.getElementById('saveImage').addEventListener('click', function(e){
    saveImage();      
  });

  document.addEventListener("keypress", function(e){

    if(e.keyCode == KEY_CODE_N){
      // generateAnimation();
      generateRandomShrine();
    }
    else if (e.keyCode == KEY_CODE_S){
      saveImage();
    }
  });
});