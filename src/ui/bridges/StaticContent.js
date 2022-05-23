import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

const StaticContent = ({inline = false, children}) => {
  const ref = useRef(null);
  const [render, setRender] = useState(typeof window === 'undefined');

  const TagName = inline ? 'span' : 'div';

  useEffect(function () {
    // check if the innerHTML is empty as client side navigation
    // need to render the component without server-side backup
    const isEmpty = ref.current.innerHTML === '';
    if (isEmpty) {
      setRender(true);
    }
  }, []);

  // if we're in the server or a spa navigation, just render it
  if (render) {
    return <TagName className="sc">{children}</TagName>;
  }

  StaticContent.propTypes = {
    children: PropTypes.node,
    inline: PropTypes.bool,
  };

  // avoid re-render on the client
  return <TagName className="sc" ref={ref} suppressHydrationWarning dangerouslySetInnerHTML={{__html: ''}} />;
};

export {StaticContent};
