import BufferFileSignature from '../src'

it('should be "unknown" from base64', () => {
  const file = BufferFileSignature.fromBase64('aGVsbG8=')
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

it('should be equal to the size with fraction', () => {
  const size = BufferFileSignature.formatSize(17036243, 2)
  expect(size).toBe('16.25 MB')
})
