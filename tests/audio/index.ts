import fs from 'fs'
import path from 'path'

export const aac = fs.readFileSync(path.join(__dirname, './aac.txt'), 'utf8')
export const flac = fs.readFileSync(path.join(__dirname, './flac.txt'), 'utf8')
export const mid = fs.readFileSync(path.join(__dirname, './mid.txt'), 'utf8')
export const mp3 = fs.readFileSync(path.join(__dirname, './mp3.txt'), 'utf8')
export const ogg = fs.readFileSync(path.join(__dirname, './ogg.txt'), 'utf8')
export const wav = fs.readFileSync(path.join(__dirname, './wav.txt'), 'utf8')
