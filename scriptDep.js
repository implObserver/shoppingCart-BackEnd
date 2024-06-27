import { exec } from 'child_process';

const commands = [
    'npm install',
    'npm install --save-dev nodemon',
    'npm install mongoose',
    'npm install express-async-handler',
    'npm install luxon',
    'npm install express-validator',
    'npm install express express-session mongoose passport passport-local ejs',
    'npm install bcryptjs',
    'npm install cookie-parser',
    'npm install dotenv --save',
    'npm install compression',
    'npm install helmet',
    'npm install express-rate-limit',
    'npm install debug',
    'npm install http-errors',
    'npm install passport',
    'npm install passport-local',
    'npm install pug',

]

function delay() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}

async function delayedExec(command) {
    // мы можем использовать await для Promise
    // который возвращается из delay
    await delay();
    console.log('command: ' + command);
    exec(command, function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        if (error !== null) {
            console.log('exec error: ' + error);
        }

    });
}



for (const command of commands) {
    await delayedExec(command);
}