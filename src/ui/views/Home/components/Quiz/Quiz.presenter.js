import {getQuizFirstQuestion, sendQuizFirstQuestion} from '@core/quiz/application';
import {eventManager} from '@core/event/application';
import {EVENT} from '@tracking/tracking.definition';

export const QuizPresenter = view => ({
  onLoadQuestion: async () => {
    view.showQuestion(await getQuizFirstQuestion(view.screen.L));
  },
  onSaveQuestionQuiz: (question, answer) => {
    sendQuizFirstQuestion(question.id, answer);

    const answerAlias = question.answers.find(questionAnswer => questionAnswer.value === answer).alias;

    eventManager.emit(EVENT.QUIZ, {
      quiz: 'leisure',
      number: 1,
      select: {
        'dress-leisure': [answerAlias],
      },
    });
  },
  validateAnswer: answer => {
    view.setError(!answer);
    if (!answer) view.setBusy(false);
    return answer;
  },
});
