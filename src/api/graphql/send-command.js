import {GRAPHQL_PATHNAME, SERVER_PORT} from '../../constants';

export const sendCommand = async ({command}) => {
    return await fetch(`http://localhost:${SERVER_PORT}${GRAPHQL_PATHNAME}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `{sendCommand(command: "${command}")}`
        })
    });
};
