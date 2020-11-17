import React from 'react';
import './App.css';
import {AirbornClient} from './components/Client/airborn-client';
import {AdminPanel} from './components/AdminPanel/admin-panel';

function App() {
  return (
    <div className="App">
        <AdminPanel />
        <section className="clients">
            <h2>Clients</h2>
            <div className="clients-container">
                <AirbornClient />
                <AirbornClient />
                <AirbornClient />
                <AirbornClient />
            </div>
        </section>
    </div>
  );
}

export default App;
