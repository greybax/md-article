import { equal } from 'assert';
import extract from './index';

const input = `
# title

_20 June 2016_

#tag1 #tag2 tag3;

![alt](http://yo.io/)

content1

content2

## header2`;

const article = extract(input, 'D MMMM YYYY', 'en');

it('title', () =>
    equal(article.title.text, 'title'));

it('date', () =>
    equal(article.date.text, '20 June 2016'));

it('tags', () =>
    equal(article.tags.text, 'tag1 tag2 tag3'));

it('content', () =>
    equal(article.content.html,
`<p><img src="http://yo.io/" alt="alt"></p>
<p>content1</p>
<p>content2</p>
<h2>header2</h2>`
));

it('invalid empty input', () =>
    equal(extract(), undefined));

const woDate = extract(`
# title

#tag1 #tag2 #tag3;

content`);

it('invalid empty woDate title', () =>
    equal(woDate.title.text, 'title'));

it('invalid empty woDate date', () =>
    equal(woDate.date, undefined));

it('invalid empty woDate tags', () =>
    equal(woDate.tags.text, 'tag1 tag2 tag3'));

it('invalid empty woDate content', () =>
    equal(woDate.content.text, 'content'));

const woTitle = extract(`
20 june 2016

#tag1 #tag2 #tag3;

content`);

it('invalid empty woTitle title', () =>
    equal(woTitle.title, undefined));

it('invalid empty woTitle date', () =>
    equal(woTitle.date.text, '20 june 2016'));

it('invalid empty woTitle tags', () =>
    equal(woTitle.tags.text, 'tag1 tag2 tag3'));

it('invalid empty woTitle content', () =>
    equal(woTitle.content.text, 'content'));

const woTitleAndDate = extract(`
#tag1 #tag2 #tag3;

content`);

it('invalid empty woTitleAndDate title', () =>
    equal(woTitleAndDate.title, undefined));

it('invalid empty woTitleAndDate date', () =>
    equal(woTitleAndDate.date, undefined));

it('invalid empty woTitleAndDate tags', () =>
    equal(woTitleAndDate.tags.text, 'tag1 tag2 tag3'));

it('invalid empty woTitleAndDate content', () =>
    equal(woTitleAndDate.content.text, 'content'));
