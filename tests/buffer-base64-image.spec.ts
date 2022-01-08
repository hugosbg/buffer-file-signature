import BufferFileSignature from '../src'
import * as base64 from './image'

it('should be "bmp" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.bmp)
  expect(file.extension()).toEqual({
    ext: 'bmp',
    mime: 'image/bmp',
    types: ['bmp', 'dib'],
  })
})

it('should be "ico" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.ico)
  expect(file.extension()).toEqual({
    ext: 'ico',
    mime: 'image/x-icon',
    types: ['ico', 'cur'],
  })
})

it('should be "png" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.png)
  expect(file.extension()).toEqual({
    ext: 'png',
    mime: 'image/png',
    types: ['png'],
  })
})

it('should be "gif" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.gif)
  expect(file.extension()).toEqual({
    ext: 'gif',
    mime: 'image/gif',
    types: ['gif'],
  })
})

it('should be "jpg" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.jpg)
  expect(file.extension()).toEqual({
    ext: 'jpg',
    mime: 'image/jpeg',
    types: ['jpg', 'jpeg', 'jfif'],
  })
})

it('should be "svg" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.svg)
  expect(file.extension()).toEqual({
    ext: 'svg',
    mime: 'image/svg+xml',
    types: ['svg'],
  })
})

it('should be "tif" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.tiff)
  expect(file.extension()).toEqual({
    ext: 'tif',
    mime: 'image/tiff',
    types: ['tif', 'tiff'],
  })
})

it('should be "webp" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.webp)
  expect(file.extension()).toEqual({
    ext: 'webp',
    mime: 'image/webp',
    types: ['webp'],
  })
})

it('should be "unknown" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.F7z)
  expect(file.extension()).toEqual({
    ext: 'unknown',
    mime: 'unknown',
    types: ['unknown'],
  })
})

it('should be equal to the size', () => {
  const size = BufferFileSignature.formatSize(17036243)
  expect(size).toBe('16 MB')
})
