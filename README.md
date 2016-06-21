# md-article

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

_24 july 2015_

desc

![alt](http://yo.io/)

content1

content2`;

const article = extract(input, 'D MMMM YYYY', 'en');
article.title.text;    // title
article.date.text;     // 24 july 2015
article.desc.text;     // desc
article.image.src;     // http://yo.io/
article.content.html;  // <p>desc</p>
                       // <p><img src="http://yo.io/" alt="" /></p>
                       // <p>content1</p>
                       // <p>content2</p>
```

## API

### extract(input, dateFormat, dateLocale)

Return object `{ title, date, desc, image, content }`.

I hope that all fields have self-explanatory names. Anyway, `desc` and `content` should be explained further: `desc` — first paragraph without date, `content` input without title and date.  All the fields are objects with such fields:

* title, desc, content: `text` and `html`
* date: `text`, `html`, `unix` and `moment`
* image: `alt`, `src` and `html`

Also everything in returned object has `node` field, which is an AST node, see [commonmark API][cmapi].

[cmapi]: https://github.com/jgm/commonmark.js#usage

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

* [get-md-title][get-md-title] — get title from markdown article
* [get-md-date][get-md-date] — get date from markdown article
* [get-md-desc][get-md-desc] — get content from markdown article
* [get-md-image][get-md-image] — get image from markdown article
* [md-content][md-content] — get content from markdown article

## Roadmap

Use ```remark``` instead of ```commonmark``` for all markdown helpers

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


[get-md-title]: https://github.com/greybax/md-title
[get-md-date]: https://github.com/greybax/get-md-date
[get-md-desc]: https://github.com/greybax/get-md-desc
[get-md-image]: https://github.com/greybax/get-md-image
[md-content]: https://github.com/greybax/get-md-content
