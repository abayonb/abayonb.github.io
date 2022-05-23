import Cookies from 'js-cookie';

const QUIZ_NAME_STORE = 'a';

export const sendFirstQuestionSessionStorage = (idQuestion, answer) => {
  const formatQuestion = {
    [idQuestion]: [answer],
  };
  Cookies.set(QUIZ_NAME_STORE, JSON.stringify(formatQuestion), {expires: 365});
};
