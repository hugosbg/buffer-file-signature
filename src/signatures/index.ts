import { IExtension } from '../interface/file-type'
import { image } from './image'

export const extensionUnknown: IExtension = {
  ext: 'unknown',
  mime: 'unknown',
  types: ['unknown'],
}

export default {
  image,
}
