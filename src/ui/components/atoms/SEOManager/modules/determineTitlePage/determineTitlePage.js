const determineTitlePage = (formatMessage, content) => {
  const organization = `${formatMessage({id: 'head.organization'})} | `;
  const titlePage = formatMessage({id: `head.title.${content}`});
  return organization + titlePage;
};

export {determineTitlePage};
