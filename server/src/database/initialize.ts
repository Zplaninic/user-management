import fs from 'fs'
import readline from 'readline'
import db from './utils'
import userIntefrace from '../types/UserInterface'

async function initializeDB(): Promise<any> {
    var filename: string = __dirname + '/employees.txt'

    const fileStream: fs.ReadStream = fs.createReadStream(filename)

    const rl: readline.Interface = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    })

    rl.on('line', (line: string) => {
        const splitLine: string[] = line.split(',')

        const user: userIntefrace = {
            id: splitLine[0],
            name: splitLine[1],
            surname: splitLine[2],
            address: splitLine[3],
            number: splitLine[4],
            email: splitLine[5],
            birthday: splitLine[6],
        }
        db.users.push(user)
    })
}
export default initializeDB
