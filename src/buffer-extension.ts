import signatures, { extensionUnknown } from './signatures'
import { IFileType, IExtension } from './interface/file-type'
import { IFileBuffer } from './interface/file-buffer'

export default class BufferExtension {
  public constructor(private readonly fileBuffer: IFileBuffer) {}

  public extension(): IExtension {
    const hex = this.fileBuffer.buffer().toString('hex', 0, 50)
    for (const type of Object.keys(signatures)) {
      const file: IFileType = signatures[type].find((item: IFileType) =>
        item.hex.test(hex),
      )
      if (file && !file?.ascii) {
        return file.extension
      }
      if (file && file?.ascii) {
        const ascii = this.fileBuffer.buffer().toString('ascii')
        if (file.ascii.test(ascii)) {
          return file.extension
        }
      }
    }
    return extensionUnknown
  }

  public size(): number {
    return this.fileBuffer.buffer().length
  }
}
