# buffer-file-signature

> :hammer: So far it only detects popular image types, new types will be added as time goes by and/or we have help.

This package is inspired by [file-type](https://github.com/sindresorhus/file-type) and uses the [file signature](https://en.wikipedia.org/wiki/List_of_file_signatures) as the basis for determining its type.

### why choose me?

- zero dependency
- detects quickly and synchronously

### Install

Node.js

```shell
npm i buffer-file-signature
# or
yarn add buffer-file-signature
```

### Usage

Detects by base64 ( only so far )

```javascript
const file = BufferFileSignature.fromBase64('4AAQSkZJRgA...')

file.extension()
/*
example output: {
    ext: 'jpg',
    mime: 'image/jpeg',
    types: ['jpg', 'jpeg', 'jfif']
}
*/

file.size()
/*
example output: 512000 // bytes
*/
```

Help method for formatting size

```javascript
const file = BufferFileSignature.formatSize(512000)
/*
example output: 500 KB
*/
```
