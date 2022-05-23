import {useEffect} from 'react';

export const useDropDown = label => {
  useEffect(() => {
    const select = document.getElementsByClassName('select')[0];
    if (select.length > 0) {
      const firstValue = select[0].text;
      if (firstValue === label) {
        select.remove(0);
      }
    }
  });
};
