import {getFormConfig, sendMessage as infraSendMessage} from '@core/contact/infrastructure';

const getForm = () => getFormConfig();
const sendMessage = form => infraSendMessage(form);

export {getForm, sendMessage};
