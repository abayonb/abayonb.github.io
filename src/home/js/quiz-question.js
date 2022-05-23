import {device} from './helpers/device';
import {cookies} from './helpers/cookies';
import {scrollToElement} from './helpers/scroll-to-element';

const IMAGE_RATIO = 1.25; // we display images as 4/5
const SPACE_BETWEEN_IMAGES_PX = 48;
const NUM_OF_SPACES = 3;
const NUM_OF_IMAGES = 4;

const questionContainer = document.getElementById('home-quiz-question-container__inner');

const COOKIE_KEY = 'a';
const QUIZ_ANSWERS = {
  1: [],
};

const setWidthAndHeight = e => {
  document.getElementById(e.id).style.setProperty('width', `${e.width}px`);
  document.getElementById(e.id).style.setProperty('height', `${e.height}px`);
};
const getDimensionsForMobile = () => {
  const width = questionContainer.offsetWidth / 2 - 1.5;

  const height = width * IMAGE_RATIO;
  return {width, height};
};
const getDimensionsForDesktop = () => {
  const width = (questionContainer.offsetWidth - NUM_OF_SPACES * SPACE_BETWEEN_IMAGES_PX) / NUM_OF_IMAGES;
  const height = width * IMAGE_RATIO;
  return {width, height};
};
const setDimensionsInQuestionComponents = () => {
  const dimensions = device.mobile ? getDimensionsForMobile() : getDimensionsForDesktop();
  for (let i = 1; i < 5; i++) {
    setWidthAndHeight({id: `thumbnail-${i}`, ...dimensions});
    setWidthAndHeight({id: `quiz-question-${i}`, ...dimensions});
    setWidthAndHeight({id: `motion-leisure-${i}`, ...dimensions});
  }
};

const ANSWER_ALIASES = {
  1: 'casual',
  2: 'street',
  3: 'classic',
  4: 'femenine',
};

const sendAnalyticsEvent = answer =>
  window.dataLayer.push({
    event: 'quiz',
    eventCategory: 'navigation',
    quiz: 'leisure',
    number: 1,
    select: {
      'dress-leisure': [ANSWER_ALIASES[answer]],
    },
  });

const submitForm = () => {
  if (!QUIZ_ANSWERS[1].length) {
    document.getElementById('home-quiz-error').classList.remove('displayNone');
    return;
  }
  cookies.setItem(COOKIE_KEY, JSON.stringify(QUIZ_ANSWERS));
  sendAnalyticsEvent(QUIZ_ANSWERS[1][0]);
  document.location.href = '/user/quiz/work';
};

const selectOption = (e, id) => {
  const element = document.getElementById(id);
  document.getElementById('home-quiz-error').classList.add('displayNone');
  document.querySelectorAll('.selected-border').forEach(el => el.style.setProperty('box-shadow', 'none'));
  const border = element.querySelector('.selected-border');
  border.style.setProperty('box-shadow', '');
  border.classList.add('expand');
  border.classList.remove('collapse');
  QUIZ_ANSWERS['1'] = [element.getElementsByTagName('input')[0].value]; // value should be an array of strings
  scrollToElement('quiz', true);
};

const addOnClickToAnswers = () =>
  document
    .querySelectorAll('.home-quiz-question-container__inner .touchable')
    .forEach(el => el.addEventListener('click', e => selectOption(e, el.id)));

export const initQuizQuestions = () => {
  setDimensionsInQuestionComponents();
  addOnClickToAnswers();
  document.getElementById('submit-quiz').addEventListener('click', submitForm);
};
