import {getRoutes, getPrivateRoutes} from '@core/site/application';

export const {HOME_PATH: HOME_PRIVATE_PATH, LOGIN_PATH} = getPrivateRoutes();
export const {HOME_PATH, FAQ_PATH, LEGAL_PATH, PRIME_PATH} = getRoutes();
