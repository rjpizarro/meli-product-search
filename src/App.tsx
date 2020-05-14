import React from 'react';
import { Switch, Route } from 'react-router-dom'

// COMPONENTS
import Header from './components/header/header'
import Input from './components/input'
import { SearchIcon } from './components/icons'
import ItemsContainer from './containers/items'

function App() {
    return (
        <div className="App">
            <Header>
                <Input
                    label="Nunca dejes de buscar"
                    endAdornment={<SearchIcon />}
                />
            </Header>
            <Switch>
                <Route path="/items" component={ItemsContainer} />
            </Switch>
        </div>
    );
}

export default App;
