import {
  GENERAL_TOPIC,
  MY_ACCOUNT_TOPIC,
  PS_TOPIC,
  PAY_TOPIC,
  PROMOCODES_TOPIC,
  SHIPPING_TOPIC,
  RETURNS_TOPIC,
  RAF_TOPIC,
  GIFTCARD_TOPIC,
} from './getTopicsConfig';

const getDocumentsConfig = () => [
  // -- GENERAL_TOPIC ----------------------------------------------------------
  {
    topic: GENERAL_TOPIC,
    question: 'help.faq.general.q1.title',
    answer: [
      'help.faq.general.q1.a1',
      'help.faq.general.q1.a2',
      'help.faq.general.q1.a3',
      'help.faq.general.q1.a4',
      'help.faq.general.q1.a5',
      'help.faq.general.q1.a6',
    ],
  },
  {
    topic: GENERAL_TOPIC,
    question: 'help.faq.general.q2.title',
    answer: ['help.faq.general.q2.a1', 'help.faq.general.q2.a2', 'help.faq.general.q2.a3'],
  },
  {
    topic: GENERAL_TOPIC,
    question: 'help.faq.general.q3.title',
    answer: ['help.faq.general.q3.a1'],
  },
  {
    topic: GENERAL_TOPIC,
    question: 'help.faq.general.q4.title',
    answer: ['help.faq.general.q4.a1'],
  },
  {
    topic: GENERAL_TOPIC,
    question: 'help.faq.general.q5.title',
    answer: ['help.faq.general.q5.a1'],
  },
  {
    topic: GENERAL_TOPIC,
    question: 'help.faq.general.q6.title',
    answer: ['help.faq.general.q6.a1', 'help.faq.general.q6.a2'],
  },
  {
    topic: GENERAL_TOPIC,
    question: 'help.faq.general.q7.title',
    answer: ['help.faq.general.q7.a1', 'help.faq.general.q7.a2'],
  },
  {
    topic: GENERAL_TOPIC,
    question: 'help.faq.general.q8.title',
    answer: ['help.faq.general.q8.a1'],
  },
  {
    topic: GENERAL_TOPIC,
    question: 'help.faq.general.q9.title',
    answer: ['help.faq.general.q9.a1', 'help.faq.general.q9.a2'],
  },
  {
    topic: GENERAL_TOPIC,
    question: 'help.faq.general.q10.title',
    answer: ['help.faq.general.q10.a1'],
  },
  {
    topic: GENERAL_TOPIC,
    question: 'help.faq.general.q11.title',
    answer: ['help.faq.general.q11.a1', 'help.faq.general.q11.a2'],
  },
  {
    topic: GENERAL_TOPIC,
    question: 'help.faq.general.q12.title',
    answer: ['help.faq.general.q12.a1', 'help.faq.general.q12.a2'],
  },
  {
    topic: GENERAL_TOPIC,
    question: 'help.faq.general.q13.title',
    answer: ['help.faq.general.q13.a1'],
  },
  {
    topic: GENERAL_TOPIC,
    question: 'help.faq.general.q14.title',
    answer: ['help.faq.general.q14.a1'],
  },
  {
    topic: GENERAL_TOPIC,
    question: 'help.faq.general.q15.title',
    answer: ['help.faq.general.q15.a1'],
  },
  // -- MY_ACCOUNT_TOPIC ---------------------------------------------------------
  {
    topic: MY_ACCOUNT_TOPIC,
    question: 'help.faq.myacc.q1.title',
    answer: [
      'help.faq.myacc.q1.a1',
      'help.faq.myacc.q1.a2',
      'help.faq.myacc.q1.a3',
      'help.faq.myacc.q1.a4',
      'help.faq.myacc.q1.a5',
      'help.faq.myacc.q1.a6',
    ],
  },
  {
    topic: MY_ACCOUNT_TOPIC,
    question: 'help.faq.myacc.q2.title',
    answer: ['help.faq.myacc.q2.a1'],
  },
  {
    topic: MY_ACCOUNT_TOPIC,
    question: 'help.faq.myacc.q3.title',
    answer: ['help.faq.myacc.q3.a1'],
  },
  {
    topic: MY_ACCOUNT_TOPIC,
    question: 'help.faq.myacc.q4.title',
    answer: ['help.faq.myacc.q4.a1'],
  },
  {
    topic: MY_ACCOUNT_TOPIC,
    question: 'help.faq.myacc.q5.title',
    answer: ['help.faq.myacc.q5.a1'],
  },
  {
    topic: MY_ACCOUNT_TOPIC,
    question: 'help.faq.myacc.q6.title',
    answer: ['help.faq.myacc.q6.a1'],
  },
  {
    topic: MY_ACCOUNT_TOPIC,
    question: 'help.faq.myacc.q7.title',
    answer: ['help.faq.myacc.q7.a1'],
  },
  {
    topic: MY_ACCOUNT_TOPIC,
    question: 'help.faq.myacc.q8.title',
    answer: ['help.faq.myacc.q8.a1'],
  },
  {
    topic: MY_ACCOUNT_TOPIC,
    question: 'help.faq.myacc.q9.title',
    answer: ['help.faq.myacc.q9.a1'],
  },
  {
    topic: MY_ACCOUNT_TOPIC,
    question: 'help.faq.myacc.q10.title',
    answer: ['help.faq.myacc.q10.a1'],
  },
  {
    topic: MY_ACCOUNT_TOPIC,
    question: 'help.faq.myacc.q11.title',
    answer: ['help.faq.myacc.q11.a1'],
  },

  // -- PS_TOPIC ---------------------------------------------------------------
  {
    topic: PS_TOPIC,
    question: 'help.faq.ps.q1.title',
    answer: ['help.faq.ps.q1.a1'],
  },
  {
    topic: PS_TOPIC,
    question: 'help.faq.ps.q2.title',
    answer: ['help.faq.ps.q2.a1'],
  },
  {
    topic: PS_TOPIC,
    question: 'help.faq.ps.q3.title',
    answer: ['help.faq.ps.q3.a1'],
  },

  // -- PAYMENT_TOPIC ----------------------------------------------------------
  {
    topic: PAY_TOPIC,
    question: 'help.faq.pay.q1.title',
    answer: ['help.faq.pay.q1.a1'],
  },
  {
    topic: PAY_TOPIC,
    question: 'help.faq.pay.q2.title',
    answer: ['help.faq.pay.q2.a1'],
  },
  {
    topic: PAY_TOPIC,
    question: 'help.faq.pay.q3.title',
    answer: ['help.faq.pay.q3.a1'],
  },
  {
    topic: PAY_TOPIC,
    question: 'help.faq.pay.q4.title',
    answer: [
      'help.faq.pay.q4.a1',
      'help.faq.pay.q4.a2',
      'help.faq.pay.q4.a3',
      'help.faq.pay.q4.a4',
      'help.faq.pay.q4.a5',
      'help.faq.pay.q4.a6',
    ],
  },
  {
    topic: PAY_TOPIC,
    question: 'help.faq.pay.q5.title',
    answer: ['help.faq.pay.q5.a1'],
  },
  {
    topic: PAY_TOPIC,
    question: 'help.faq.pay.q6.title',
    answer: ['help.faq.pay.q6.a1'],
  },
  {
    topic: PAY_TOPIC,
    question: 'help.faq.pay.q7.title',
    answer: ['help.faq.pay.q7.a1'],
  },
  {
    topic: PAY_TOPIC,
    question: 'help.faq.pay.q8.title',
    answer: ['help.faq.pay.q8.a1'],
  },
  {
    topic: PAY_TOPIC,
    question: 'help.faq.pay.q9.title',
    answer: ['help.faq.pay.q9.a1'],
  },
  {
    topic: PAY_TOPIC,
    question: 'help.faq.pay.q10.title',
    answer: ['help.faq.pay.q10.a1'],
  },
  {
    topic: PAY_TOPIC,
    question: 'help.faq.pay.q11.title',
    answer: ['help.faq.pay.q11.a1'],
  },
  {
    topic: PAY_TOPIC,
    question: 'help.faq.pay.q12.title',
    answer: ['help.faq.pay.q12.a1'],
  },

  // -- PROMOCODES_TOPIC ---------------------------------------------------------
  {
    topic: PROMOCODES_TOPIC,
    question: 'help.faq.promocodes.q1.title',
    answer: [
      'help.faq.promocodes.q1.a1',
      'help.faq.promocodes.q1.a2',
      'help.faq.promocodes.q1.a3',
      'help.faq.promocodes.q1.a4',
      'help.faq.promocodes.q1.a5',
    ],
  },
  {
    topic: PROMOCODES_TOPIC,
    question: 'help.faq.promocodes.q2.title',
    answer: [
      'help.faq.promocodes.q2.a1',
      'help.faq.promocodes.q2.a2',
      'help.faq.promocodes.q2.a3',
      'help.faq.promocodes.q2.a4',
    ],
  },
  {
    topic: PROMOCODES_TOPIC,
    question: 'help.faq.promocodes.q3.title',
    answer: ['help.faq.promocodes.q3.a1'],
  },
  {
    topic: PROMOCODES_TOPIC,
    question: 'help.faq.promocodes.q4.title',
    answer: ['help.faq.promocodes.q4.a1'],
  },

  // -- SHIPPING_TOPIC ---------------------------------------------------------
  {
    topic: SHIPPING_TOPIC,
    question: 'help.faq.shipping.q1.title',
    answer: [
      'help.faq.shipping.q1.a1',
      'help.faq.shipping.q1.a2',
      'help.faq.shipping.q1.a3',
      'help.faq.shipping.q1.a4',
    ],
  },
  {
    topic: SHIPPING_TOPIC,
    question: 'help.faq.shipping.q2.title',
    answer: ['help.faq.shipping.q2.a1', 'help.faq.shipping.q2.a2'],
  },

  {
    topic: SHIPPING_TOPIC,
    question: 'help.faq.shipping.q3.title',
    answer: ['help.faq.shipping.q3.a1'],
  },
  {
    topic: SHIPPING_TOPIC,
    question: 'help.faq.shipping.q4.title',
    answer: [
      'help.faq.shipping.q4.a1',
      'help.faq.shipping.q4.a2',
      'help.faq.shipping.q4.a3',
      'help.faq.shipping.q4.a4',
      'help.faq.shipping.q4.a5',
      'help.faq.shipping.q4.a6',
      'help.faq.shipping.q4.a7',
    ],
  },
  {
    topic: SHIPPING_TOPIC,
    question: 'help.faq.shipping.q5.title',
    answer: ['help.faq.shipping.q5.a1'],
  },
  {
    topic: SHIPPING_TOPIC,
    question: 'help.faq.shipping.q6.title',
    answer: ['help.faq.shipping.q6.a1'],
  },
  {
    topic: SHIPPING_TOPIC,
    question: 'help.faq.shipping.q7.title',
    answer: ['help.faq.shipping.q7.a1'],
  },
  {
    topic: SHIPPING_TOPIC,
    question: 'help.faq.shipping.q8.title',
    answer: ['help.faq.shipping.q8.a1'],
  },
  {
    topic: SHIPPING_TOPIC,
    question: 'help.faq.shipping.q9.title',
    answer: ['help.faq.shipping.q9.a1'],
  },

  // -- RETURNS_TOPIC -----------------------------------------------------------
  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q1.title',
    answer: ['help.faq.returns.q1.a1', 'help.faq.returns.q1.a2', 'help.faq.returns.q1.a3', 'help.faq.returns.q1.a4'],
  },
  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q2.title',
    answer: ['help.faq.returns.q2.a1', 'help.faq.returns.q2.a2', 'help.faq.returns.q2.a3', 'help.faq.returns.q2.a4'],
  },
  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q3.title',
    answer: ['help.faq.returns.q3.a1', 'help.faq.returns.q3.a2'],
  },
  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q4.title',
    answer: ['help.faq.returns.q4.a1'],
  },

  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q5.title',
    answer: ['help.faq.returns.q5.a1', 'help.faq.returns.q5.a2'],
  },

  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q6.title',
    answer: ['help.faq.returns.q6.a1'],
  },
  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q7.title',
    answer: ['help.faq.returns.q7.a1'],
  },
  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q8.title',
    answer: ['help.faq.returns.q8.a1'],
  },
  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q9.title',
    answer: ['help.faq.returns.q9.a1'],
  },
  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q10.title',
    answer: ['help.faq.returns.q10.a1'],
  },
  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q11.title',
    answer: ['help.faq.returns.q11.a1'],
  },
  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q12.title',
    answer: ['help.faq.returns.q12.a1'],
  },
  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q13.title',
    answer: ['help.faq.returns.q13.a1'],
  },
  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q14.title',
    answer: ['help.faq.returns.q14.a1'],
  },
  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q15.title',
    answer: ['help.faq.returns.q15.a1', 'help.faq.returns.q15.a2'],
  },
  {
    topic: RETURNS_TOPIC,
    question: 'help.faq.returns.q16.title',
    answer: ['help.faq.returns.q16.a1', 'help.faq.returns.q16.a2'],
  },

  // -- RAF_TOPIC --------------------------------------------------------
  {
    topic: RAF_TOPIC,
    question: 'help.faq.mgm.q1.title',
    answer: [
      'help.faq.mgm.q1.a1',
      'help.faq.mgm.q1.a2',
      'help.faq.mgm.q1.a3',
      'help.faq.mgm.q1.a4',
      'help.faq.mgm.q1.a5',
      'help.faq.mgm.q1.a6',
    ],
  },
  {
    topic: RAF_TOPIC,
    question: 'help.faq.referrals.q2.title',
    answer: ['help.faq.referrals.q2.a1'],
  },
  {
    topic: RAF_TOPIC,
    question: 'help.faq.referrals.q3.title',
    answer: ['help.faq.referrals.q3.a1'],
  },
  {
    topic: RAF_TOPIC,
    question: 'help.faq.referrals.q4.title',
    answer: ['help.faq.referrals.q4.a1'],
  },
  {
    topic: RAF_TOPIC,
    question: 'help.faq.referrals.q5.title',
    answer: ['help.faq.referrals.q5.a1'],
  },
  // -- GIFTCARD_TOPIC --------------------------------------------------------
  {
    topic: GIFTCARD_TOPIC,
    question: 'help.faq.giftcard.q1.title',
    answer: ['help.faq.giftcard.q1.a1'],
  },
  {
    topic: GIFTCARD_TOPIC,
    question: 'help.faq.giftcard.q2.title',
    answer: [
      'help.faq.giftcard.q2.a1',
      'help.faq.giftcard.q2.a2',
      'help.faq.giftcard.q2.a3',
      'help.faq.giftcard.q2.a4',
    ],
  },
  {
    topic: GIFTCARD_TOPIC,
    question: 'help.faq.giftcard.q3.title',
    answer: ['help.faq.giftcard.q3.a1'],
  },
  {
    topic: GIFTCARD_TOPIC,
    question: 'help.faq.giftcard.q4.title',
    answer: ['help.faq.giftcard.q4.a1'],
  },
  {
    topic: GIFTCARD_TOPIC,
    question: 'help.faq.giftcard.q5.title',
    answer: ['help.faq.giftcard.q5.a1'],
  },
  {
    topic: GIFTCARD_TOPIC,
    question: 'help.faq.giftcard.q6.title',
    answer: ['help.faq.giftcard.q6.a1', 'help.faq.giftcard.q6.a2'],
  },
  {
    topic: GIFTCARD_TOPIC,
    question: 'help.faq.giftcard.q7.title',
    answer: ['help.faq.giftcard.q7.a1'],
  },
  {
    topic: GIFTCARD_TOPIC,
    question: 'help.faq.giftcard.q8.title',
    answer: ['help.faq.giftcard.q8.a1', 'help.faq.giftcard.q8.a2'],
  },
  {
    topic: GIFTCARD_TOPIC,
    question: 'help.faq.giftcard.q9.title',
    answer: ['help.faq.giftcard.q9.a1'],
  },
  {
    topic: GIFTCARD_TOPIC,
    question: 'help.faq.giftcard.q10.title',
    answer: ['help.faq.giftcard.q10.a1'],
  },
  {
    topic: GIFTCARD_TOPIC,
    question: 'help.faq.giftcard.q11.title',
    answer: ['help.faq.giftcard.q11.a1'],
  },
];

export {getDocumentsConfig};
