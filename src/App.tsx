import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'

// COMPONENTS
import Header from './components/header/header'
import Input from './components/input'
import { SearchIcon } from './components/icons'
import ItemsContainer from './containers/items'

function App() {
    const [searchValue, setSearchValue] = useState('')
    const history = useHistory()

    useEffect(() => {
        document.addEventListener('keypress', onKeyPress)

        return () => {
            document.removeEventListener('keypress', onKeyPress)
        }
    }, [searchValue])

    const onKeyPress = (evt: KeyboardEvent) => {
        if (evt.key === 'Enter' && searchValue) {
            history.push(`/items?search=${searchValue}`)
        }
    }

    return (
        <div className="App">
            <Header>
                <Input
                    label="Nunca dejes de buscar"
                    endAdornment={ <SearchIcon /> }
                    onChange={(evt) => {
                        console.log(">>app", evt.target.value)
                        setSearchValue(evt.target.value)
                    }}
                />
            </Header>
            <Switch>
                <Route path="/items" component={ItemsContainer} />
            </Switch>
        </div>
    );
}

export default App;
