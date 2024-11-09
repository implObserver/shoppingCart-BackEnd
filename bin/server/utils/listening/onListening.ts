// Обработчик событий для успешного прослушивания
import createDebugMessages from 'debug';
import { Server } from 'http';
export const debug = createDebugMessages('authentification-basics:server');

export function onListening(server: Server) {
  const addr = server.address(); // Получаем адрес сервера
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + (addr?.port || '');

  debug('Listening on ' + bind); // Выводим сообщение об отладке
}
