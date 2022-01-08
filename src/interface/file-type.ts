export interface IFileType {
  hex: RegExp
  ascii?: RegExp
  extension: IExtension
}

export interface IExtension {
  ext: string
  mime: string
  types: string[]
}
