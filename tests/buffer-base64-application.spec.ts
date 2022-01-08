import BufferFileSignature from '../src'
import * as base64 from './application'

it('should be "pdf" from base64', () => {
  const file = BufferFileSignature.fromBase64(base64.pdf)
  expect(file.extension()).toEqual({
    ext: 'pdf',
    mime: 'application/pdf',
    types: ['pdf'],
  })
})
