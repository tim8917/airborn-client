import React from 'react';
import {useSubscription} from '@apollo/client';
import { gql } from '@apollo/client';
import './subscription-command.css';

const COMMANDS_SUBSCRIPTION = gql`
    subscription OnCommandGiven {
        commandGiven{
            num
            name
        }
    }
`;

export const SubscriptionCommand = ({}) => {
    const {loading, error, data} = useSubscription(COMMANDS_SUBSCRIPTION);

    if (loading) return <p>Expecting connection...</p>;
    if (error) return (<p>{JSON.stringify(error)}</p>);

    const {commandGiven: command} = data;
    const {name, num} = command;

    return (
        <div className="commands-container">
            <span className="command-name">{`Command: ${name}`}</span>
            <span>{num && `Num: ${command.num}`}</span>
        </div>
    );
};
