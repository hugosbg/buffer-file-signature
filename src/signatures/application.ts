import { IFileType } from '../interface/file-type'

/**
 * @see https://en.wikipedia.org/wiki/List_of_file_signatures
 */
export const application: IFileType[] = [
  {
    hex: /^255044462D/i,
    extension: {
      ext: 'pdf',
      mime: 'application/pdf',
      types: ['pdf'],
    },
  },
]
