import React, {useState} from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {SubscriptionCommand} from '../Commands/subscription-command';
import './airborn-client.css';
import {wsLink} from '../../api/ws';
import {getRandomColor} from './utils';
import {useConstructor} from '../../hooks';

export const AirbornClient = () => {
    const [graphqlClient, setGraphqlClient] = useState(null);

    useConstructor(() => {
        setGraphqlClient(
            new ApolloClient({
                link: wsLink,
                cache: new InMemoryCache(),
            })
        );
    });

    return (
        <ApolloProvider client={graphqlClient}>
            <div
                className="airborn-client-container"
                style={{backgroundColor: getRandomColor()}}
            >
                <SubscriptionCommand />
            </div>
        </ApolloProvider>
    );
};
