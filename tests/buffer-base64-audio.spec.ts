import BufferFileSignature from '../src'
import * as base64 from './audio'

it('should be "mp3" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.mp3)
  expect(file.extension()).toEqual({
    ext: 'mp3',
    mime: 'audio/mpeg',
    types: ['mp3'],
  })
})

it('should be "ogg" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.ogg)
  expect(file.extension()).toEqual({
    ext: 'ogg',
    mime: 'audio/ogg',
    types: ['ogg', 'oga', 'ogv'],
  })
})

it('should be "wav" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.wav)
  expect(file.extension()).toEqual({
    ext: 'wav',
    mime: 'audio/wav',
    types: ['wav'],
  })
})

it('should be "flac" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.flac)
  expect(file.extension()).toEqual({
    ext: 'flac',
    mime: 'audio/flac',
    types: ['flac'],
  })
})

it('should be "mid" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.mid)
  expect(file.extension()).toEqual({
    ext: 'mid',
    mime: 'audio/midi',
    types: ['mid', 'midi'],
  })
})

it('should be "aac" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.aac)
  expect(file.extension()).toEqual({
    ext: 'aac',
    mime: 'audio/aac',
    types: ['aac'],
  })
})
