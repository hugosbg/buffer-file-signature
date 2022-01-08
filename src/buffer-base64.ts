import { Buffer } from 'node:buffer'
import { IFileBuffer } from './interface/file-buffer'

export default class BufferBase64 implements IFileBuffer {
  public constructor(public readonly source: string) {}

  buffer(): Buffer {
    const base64 = String(this.source).substring(
      String(this.source).indexOf(',') + 1,
    )
    return Buffer.from(base64, 'base64')
  }
}
