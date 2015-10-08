# foundry-release-npm [![Build status](https://travis-ci.org/twolfson/foundry-release-npm.png?branch=master)](https://travis-ci.org/twolfson/foundry-release-npm)

Manage [npm][] releases via [foundry][]

This is an [npm][] command for [foundry][], a modular release management library.

[npm]: https://npmjs.org/
[foundry]: https://github.com/twolfson/foundry

## Documentation
This library was build to match the [foundry release specification][spec] and is written on top of [foundry-release-base][]. Documentation can be found at:

https://github.com/twolfson/foundry-release-spec

https://github.com/twolfson/foundry-release-base

[spec]: https://github.com/twolfson/foundry-release-spec
[foundry-release-base]: https://github.com/twolfson/foundry-release-base

### Actions
- On `update-files`, we will update the `version` in `package.json`
- On `publish`, we will run `npm publish`
    - If there is a `private: true` field in the `package.json`, then this step will be skipped

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via [grunt](https://github.com/gruntjs/grunt) and test via `npm test`.

## Donating
Support this project and [others by twolfson][gittip] via [gittip][].

[![Support via Gittip][gittip-badge]][gittip]

[gittip-badge]: https://rawgithub.com/twolfson/gittip-badge/master/dist/gittip.png
[gittip]: https://www.gittip.com/twolfson/

## Unlicense
As of Jan 12 2014, Todd Wolfson has released this repository and its contents to the public domain.

It has been released under the [UNLICENSE][].

[UNLICENSE]: UNLICENSE
