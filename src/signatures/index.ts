import { IExtension } from '../interface/file-type'
import { application } from './application'
import { audio } from './audio'
import { image } from './image'

export const extensionUnknown: IExtension = {
  ext: 'unknown',
  mime: 'unknown',
  types: ['unknown'],
}

export default {
  application,
  audio,
  image,
}
