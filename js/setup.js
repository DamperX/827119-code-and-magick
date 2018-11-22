'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var nickName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var surName = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var wizardAmount = 4;

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomElementFromArray = function (array) {
  var random = Math.floor(Math.random() * array.length);
  return array[random];
};

var wizardName = getRandomElementFromArray(nickName) + ' ' + getRandomElementFromArray(surName);

var wizardCoat = getRandomElementFromArray(coatColors);

var wizardEyes = getRandomElementFromArray(eyesColors);

var wizards = [
  {
    name: wizardName,
    coatColor: wizardCoat,
    eyesColor: wizardEyes
  },
  {
    name: wizardName,
    coatColor: wizardCoat,
    eyesColor: wizardEyes
  },
  {
    name: wizardName,
    coatColor: wizardCoat,
    eyesColor: wizardEyes
  },
  {
    name: wizardName,
    coatColor: wizardCoat,
    eyesColor: wizardEyes
  },
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
