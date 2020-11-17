export const sendCommand = async ({command}) => {
    return await fetch('http://localhost:4000/api/ql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `{sendCommand(command: "${command}")}`
        })
    });
};
