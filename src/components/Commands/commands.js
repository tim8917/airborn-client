import React from 'react';
import {useQuery, gql} from '@apollo/client';

// query GetAvailableCommands {
//     commands {
//         id
//         name
//     }
// }

const COMMANDS_AVAILABLE = gql`   
    query GetCommand {
        command(id:"fly"){id}
    }
`;

export const Commands = ({}) => {
    const {loading, error, data} = useQuery(COMMANDS_AVAILABLE);

    if (loading) return <p>Loading...</p>;
    if (error) return (<p>{JSON.stringify(error)}</p>);

    return (
        <div className="commands-container">
            {JSON.stringify(data)}
            {/*{commands.map(({id, name}) => (*/}
            {/*    <div key={id}>{name}</div>*/}
            {/*))}*/}
        </div>
    );
};
