import { IFileType } from '../interface/file-type'

/**
 * @see https://en.wikipedia.org/wiki/List_of_file_signatures
 */
export const image: IFileType[] = [
  {
    hex: /^424D/i,
    extension: {
      ext: 'bmp',
      mime: 'image/bmp',
      types: ['bmp', 'dib'],
    },
  },
  {
    hex: /^00000100/i,
    extension: {
      ext: 'ico',
      mime: 'image/x-icon',
      types: ['ico', 'cur'],
    },
  },
  {
    hex: /^89504E470D0A1A0A/i,
    extension: {
      ext: 'png',
      mime: 'image/png',
      types: ['png'],
    },
  },
  {
    hex: /^(474946383761|474946383961)/i,
    extension: {
      ext: 'gif',
      mime: 'image/gif',
      types: ['gif'],
    },
  },
  {
    hex: /^(FFD8FFDB|FFD8FFE000104A4649460001|FFD8FFEE|FFD8FFE1([0-9a-z-A-Z]{4})457869660000)/i,
    extension: {
      ext: 'jpg',
      mime: 'image/jpeg',
      types: ['jpg', 'jpeg', 'jfif'],
    },
  },
  {
    hex: /^3C3F786D6C20/i,
    ascii: /<svg\s.*[^>]>/gis,
    extension: {
      ext: 'svg',
      mime: 'image/svg+xml',
      types: ['svg'],
    },
  },
  {
    hex: /^(49492A00|4D4D002A)/i,
    extension: {
      ext: 'tif',
      mime: 'image/tiff',
      types: ['tif', 'tiff'],
    },
  },
  {
    hex: /^52494646([0-9a-z-A-Z]{8})57454250/i,
    extension: {
      ext: 'webp',
      mime: 'image/webp',
      types: ['webp'],
    },
  },
]
