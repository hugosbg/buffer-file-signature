import fs from 'fs'
import path from 'path'

export const pdf = fs.readFileSync(path.join(__dirname, './pdf.txt'), 'utf8')
