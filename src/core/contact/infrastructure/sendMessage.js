import {http} from '@core/api/infrastructure';

const sendMessage = ({category, countryCode, email, message, name}) =>
  http.post('/api/contact/', {category, countryCode, email, message, name});

export {sendMessage};
