import getTitle       from 'md-title';
import getDate        from 'md-date';
import mdTags         from 'md-tags';
import getContent     from 'md-content';

export default (input, dateFormat, dateLocale) => {
    if (!input) return;
    const title = getTitle(input);
    const date = getDate(dateFormat, dateLocale, input);
    const dateText = date && date.text;
    const tags = mdTags().tagsForPost(input);
    const content = getContent(input);
    return { title, date, tags, content };
};