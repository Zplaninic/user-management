const fs = require('fs')
const readline = require('readline')
import db from './utils'

async function initializeDB(): Promise<any> {
    var filename = __dirname + '/employees.txt'

    const fileStream = fs.createReadStream(filename)

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    })

    rl.on('line', (line: string) => {
        const splitLine = line.split(',')

        const user = {
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
