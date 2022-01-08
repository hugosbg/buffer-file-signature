import BufferExtension from './buffer-extension'
import BufferBase64 from './buffer-base64'

export default class BufferFileSignature {
  public static fromBase64(value: string): BufferExtension {
    return new BufferExtension(new BufferBase64(value))
  }

  public static formatSize(value: number, fraction = 0): string {
    const length = Number(value)
    const expoente = Math.floor(Math.log(length) / Math.log(1024))
    const size = (length / 1024 ** expoente).toFixed(fraction)
    const sufix = ['B', 'KB', 'MB', 'GB', 'TB'][expoente]
    return `${size} ${sufix}`
  }
}
