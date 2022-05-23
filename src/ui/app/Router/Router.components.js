import {lazy} from 'react';

const toDefault = key => ({[key]: component}) => ({default: component});

export const Home = lazy(() => import('@views/Home').then(toDefault('Home')));
export const Legal = lazy(() => import('@views/Legal').then(toDefault('Legal')));
export const Faq = lazy(() => import('@views/Faq').then(toDefault('Faq')));
export const Prime = lazy(() => import('@views/Prime').then(toDefault('Prime')));
export const Unsubscribe = lazy(() => import('@views/Unsubscribe').then(toDefault('Unsubscribe')));
export const HomeSiteCom = lazy(() => import('@views/HomeSiteCom').then(toDefault('HomeSiteCom')));
export const NotFound = lazy(() => import('@views/NotFound').then(toDefault('NotFound')));
