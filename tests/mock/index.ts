import fs from 'fs'
import path from 'path'

export const F7z = fs.readFileSync(path.join(__dirname, './7z.txt'), 'utf8')
export const bmp = fs.readFileSync(path.join(__dirname, './bmp.txt'), 'utf8')
export const cur = fs.readFileSync(path.join(__dirname, './cur.txt'), 'utf8')
export const gif = fs.readFileSync(path.join(__dirname, './gif.txt'), 'utf8')
export const ico = fs.readFileSync(path.join(__dirname, './ico.txt'), 'utf8')
export const jpg = fs.readFileSync(path.join(__dirname, './jpg.txt'), 'utf8')
export const png = fs.readFileSync(path.join(__dirname, './png.txt'), 'utf8')
export const svg = fs.readFileSync(path.join(__dirname, './svg.txt'), 'utf8')
export const tiff = fs.readFileSync(path.join(__dirname, './tiff.txt'), 'utf8')
export const webp = fs.readFileSync(path.join(__dirname, './webp.txt'), 'utf8')
