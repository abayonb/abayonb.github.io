import {getDevicePath} from '@core/helpers';
import {getQuizFunnelUrlConfig, sendFirstQuestionSessionStorage} from '@core/quiz/infrastructure';
import {getFirstQuestion} from './services';

const getQuizFirstQuestion = isDesktop => getFirstQuestion(getDevicePath(isDesktop));
const getQuizFunnelUrl = () => getQuizFunnelUrlConfig();
const sendQuizFirstQuestion = (idQuestion, answer) => sendFirstQuestionSessionStorage(idQuestion, answer);

export {getQuizFunnelUrl, getQuizFirstQuestion, sendQuizFirstQuestion};
