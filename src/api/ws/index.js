import {WebSocketLink} from '@apollo/client/link/ws';
import {SERVER_PORT, WEBSOCKETS_PATHNAME} from '../../constants';

export const wsLink = new WebSocketLink({
    uri: `ws://localhost:${SERVER_PORT}${WEBSOCKETS_PATHNAME}`,
    options: {
        reconnect: true,
    },
});
