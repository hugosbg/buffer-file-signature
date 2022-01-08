import { IFileType } from '../interface/file-type'

/**
 * @see https://en.wikipedia.org/wiki/List_of_file_signatures
 */
export const audio: IFileType[] = [
  {
    hex: /^(494433|FFFB|FFF3|FFF2)/i,
    extension: {
      ext: 'mp3',
      mime: 'audio/mpeg',
      types: ['mp3'],
    },
  },
  {
    hex: /^4F676753/i,
    extension: {
      ext: 'ogg',
      mime: 'audio/ogg',
      types: ['ogg', 'oga', 'ogv'],
    },
  },
  {
    hex: /^52494646([0-9a-z-A-Z]{8})57415645/i,
    extension: {
      ext: 'wav',
      mime: 'audio/wav',
      types: ['wav'],
    },
  },
  {
    hex: /^664C6143/i,
    extension: {
      ext: 'flac',
      mime: 'audio/flac',
      types: ['flac'],
    },
  },
  {
    hex: /^4D546864/i,
    extension: {
      ext: 'mid',
      mime: 'audio/midi',
      types: ['mid', 'midi'],
    },
  },
  {
    hex: /^FFF150/i,
    extension: {
      ext: 'aac',
      mime: 'audio/aac',
      types: ['aac'],
    },
  },
]
