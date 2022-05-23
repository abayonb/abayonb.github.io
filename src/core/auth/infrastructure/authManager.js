import {AuthStorage} from './authStorage';

const getAuth = () => AuthStorage.get();

export {getAuth};
