
# @tiaanduplessis/sizeof
[![package version](https://img.shields.io/npm/v/@tiaanduplessis/sizeof.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/sizeof)
[![package downloads](https://img.shields.io/npm/dm/@tiaanduplessis/sizeof.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/sizeof)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/@tiaanduplessis/sizeof.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/sizeof)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Get approximate size of literal or variable in bytes

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install @tiaanduplessis/sizeof
$ # OR
$ yarn add @tiaanduplessis/sizeof
```

## Usage

```js
const sizeof = require('@tiaanduplessis/sizeof')

sizeof(1) // 8
sizeof('hello') // 10
sizeof(true) // 4

sizeof({
  foo: 1,
  bar: 1,
  baz: {
    yes: true,
    foo: {
      hello: 'world'
    }
  }
}) // 30

const m = new Map()
const s = new Set()

m.set('foo', 'foo').set('bar', 9)
s.add('true').add('false').add(1)

sizeof({
  foo: 'true',
  m,
  s
}) // 48

```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    