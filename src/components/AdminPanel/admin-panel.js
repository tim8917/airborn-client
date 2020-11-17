import React from 'react';
import {sendCommand} from '../../api/graphql/send-command';

export const AdminPanel = () => {
    return (
        <section className="admin-container">
            <h2>Admin</h2>
            {/*<div>*/}
            {/*    <label>Arbitrary Command</label><br />*/}
            {/*    <input type="text" /><br />*/}
            {/*    <button>send</button>*/}
            {/*</div><br /><br />*/}
            <div className="buttons">
                <button onClick={() => {sendCommand({command: 'fly'});}}>fly</button>
                <button onClick={() => {sendCommand({command: 'land'});}}>land</button>
                <button onClick={() => {sendCommand({command: 'any'});}}>any command</button>
            </div>
        </section>
    );
};
