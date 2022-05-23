export const localizeOptions = (options, {formatMessage}) =>
  options.map(({value, id, defaultMessage}) => ({
    value,
    name: formatMessage({id, defaultMessage}),
  }));
