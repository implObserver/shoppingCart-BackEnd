import { app } from '../../app/app.ts';
import { createServer, Server } from 'http';
import { defaultConfig } from './cfg/config.ts';
import { normalizePort } from './utils/normalize/normalize.ts';
import { onError } from './utils/error/onError.ts';
import { onListening } from './utils/listening/onListening.ts';
import 'dotenv/config';
import { getSocketIO } from './utils/socket/getSocketIO.ts';

const port = normalizePort(defaultConfig.port) as number;
const host = defaultConfig.host as string;

app.set('port', port);

const server: Server = createServer(app);

export const io = getSocketIO(server);

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});

server.on('error', (error) => onError(error, port));
server.on('listening', () => onListening(server));
