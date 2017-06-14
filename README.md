# md-article

[![Greenkeeper badge](https://badges.greenkeeper.io/greybax/md-article.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Extract data from your markdown article

## Install

    npm install --save md-article

## Usage

```js
import extract from 'md-article';

const input = `
# title

_24 june 2016_

#tag1 #tag2 #tag3;

desc

content1

content2`;

const article = extract(input, 'D MMMM YYYY', 'en');
article.title.text;    // title
article.date.text;     // 24 june 2016
article.tags.text;     // tag1 tag2 tag3
article.content.html;  // <p>desc</p>
                       // <p>content1</p>
                       // <p>content2</p>
```

## API

### extract(input, dateFormat, dateLocale)

Return object `{ title, date, tags, content }`.

I hope that all fields have self-explanatory names. 
Anyway, `tags` and `content` should be explained further: `desc` — paragrapgh with elements like ```#tag1 #tag2;```, `content` input without title, tags and date.  All the fields are objects with such fields:

* title, content: `text` and `html`
* tags: `list`, `text` and `html`
* date: `text`, `html`, `unix` and `moment`

Also everything in returned ```mdast``` object node, see [MDAST][mdast].

[mdast]: https://github.com/wooorm/mdast

#### input

*Required*  
Type: `String`

Markdown string.

#### dateFormat

*Required*  
Type: `String`

Momentjs [format][format] for date, e.g. `D MMMM YYYY`.

[format]: http://momentjs.com/docs/#/displaying/format/

#### dateLocale

*Required*  
Type: `String`

One of 83 available in momentjs [locales][i18n], e.g. `en` or `fr`.

[i18n]: http://momentjs.com/docs/#/i18n/

## Related

* [md-title][md-title] — get title from markdown article
* [md-date][md-date] — get date from markdown article
* [md-tags][md-tags] — get tags from markdown article
* [md-content][md-content] — get content from markdown article

## Roadmap

- [x] ```remark``` instead of ```commonmark``` for all markdown helpers

## License

MIT © [Aleksandr Filatov](https://alfilatov.com/)

[npm-url]: https://npmjs.org/package/md-article
[npm-image]: https://img.shields.io/npm/v/md-article.svg?style=flat-square

[travis-url]: https://travis-ci.org/greybax/md-article
[travis-image]: https://img.shields.io/travis/greybax/md-article/master.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/greybax/md-article
[coveralls-image]: https://img.shields.io/coveralls/greybax/md-article/master.svg?style=flat-square

[depstat-url]: https://david-dm.org/greybax/md-article
[depstat-image]: https://david-dm.org/greybax/md-article.svg?style=flat-square


[md-title]: https://github.com/greybax/md-title
[md-date]: https://github.com/greybax/md-date
[md-tags]: https://github.com/greybax/md-tags
[md-content]: https://github.com/greybax/md-content