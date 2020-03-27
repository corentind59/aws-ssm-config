# aws-ssm-config
> Fetch your configuration from AWS SSM Parameter store easily

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

This package comes from a refactoring problem that I had during a personal project.
Basically, I stored by configuration on AWS SSM Parameter Store and wanted to retrieve it
in a simple and efficient way. So I made a simple package that I could reuse to
make it easy and BOOM ! Here is **aws-ssm-config** ! 

## Installation

```sh
npm install @corentind/aws-ssm-config
```

or if using Yarn :

````sh
yarn add @corentind/aws-ssm-config
````

## Usage

### Basic usage

```js
import { SSMConfigClient } from '@corentind/aws-ssm-config';

// Create a client and provide the base path.
const client = new SSMConfigClient({
  basePath: '/myproject/api/prod'
});

// You can now retrieve parameters under this base path.
client.getByKey('mongo-url')
  .then(url => /* connect to MongoDB... */)
  .catch(error => console.error('Something went wrong : ', error));
```

### On-fly decryption

```js
import { SSMConfigClient } from '@corentind/aws-ssm-config';

const client = new SSMConfigClient({
  basePath: '/myproject/api/prod',
  withDecryption: true
});

client.getByKey('mongo-password')
  .then(password => /* SecureString is decrypted. */)
  .catch(error => console.error('Something went wrong : ', error));
```

### XRay Tracing

```js
import { SSMConfigClient } from '@corentind/aws-ssm-config';

// By specifying the `capture` option, all API calls will be captured by XRay.
const client = new SSMConfigClient({
  basePath: '/myproject/api/prod',
  capture: true
});
```

### Overriding global options

```js
import { SSMConfigClient } from '@corentind/aws-ssm-config';

const client = new SSMConfigClient({
  basePath: '/myproject/api/prod'
});

client.getByKey('common-prop', { basePath: '/myproject/common/prod' })
  .then(someProp => /* do something... */)
  .catch(error => console.error('Something went wrong : ', error));
```

## Development setup

The project was created and built with Yarn, so please use it too for development.
Install dependencies :

```sh
yarn
```

## Release History

* 0.1.2
    * Fixed .npmignore
    * Updated NPM badges
* 0.1.1
    * Added SSMClientConfig
    * Allows to retrieve one parameter at a time by key
    * Allows on-fly decryption
    * Allows XRay tracing

## Meta

Corentin Delannoy – corentin.delannoy2@gmail.com

Distributed under the MIT license. See ``LICENSE`` for more information.

## Contributing

1. Fork it (<https://github.com/corentind59/aws-ssm-config>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/@corentind/aws-ssm-config.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@corentind/aws-ssm-config
[npm-downloads]: https://img.shields.io/npm/dm/@corentind/aws-ssm-config.svg?style=flat-square
