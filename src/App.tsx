import React from 'react';

// COMPONENTS
import Header from './components/header/header'
import Input from './components/input'
import { SearchIcon } from './components/icons'

function App() {
    return (
        <div className="App">
            <Header>
                <Input
                    label="Nunca dejes de buscar"
                    endAdornment={<SearchIcon />}
                />
            </Header>
        </div>
    );
}

export default App;
