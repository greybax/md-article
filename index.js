import getTitle   from 'md-title';
import getDate    from 'md-date';
import getDesc    from 'get-md-desc';
import getContent from 'md-content';

export default (input, dateFormat, dateLocale) => {
  if (!input) return;
  const title     = getTitle(input);
  const date      = getDate(dateFormat, dateLocale, input);
  const dateText  = date && date.text;
  const desc      = getDesc(input, dateText);
  const content   = getContent(input);
  return { title, date, desc, content};
};