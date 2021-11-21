const fs = require('fs');
const { Transform } = require('stream');

const ACCESS_LOG = './access.log';
const ip = [
    '89.123.1.41',
    '34.48.240.111'
];

const readStream = fs.createReadStream(
    ACCESS_LOG,
    {
        flags: 'r',
        encoding: 'utf-8',
    },
)

function tStream(ip) {
    return new Transform({
        transform(chunk, encoding, callbakc) {
            const transformed = chunk.toString().split('\n');
            transformed.forEach(info => {
                const matches = info.match(ip);
                if (matches) this.push(matches.input + '\n');
            })
            callbakc();
        }
    });
}

ip.forEach(ip => {
    const writeStream = fs.createWriteStream(
        `./${ip}_requests.log`,
        {
            encoding: 'utf-8',
        },
    )
    readStream.pipe(tStream(ip)).pipe(writeStream)
})



