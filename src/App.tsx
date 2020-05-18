import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet';

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
            <Helmet
                titleTemplate="%s - Mercado Libre"
                defaultTitle="Mercado Libre - Democratizando el comercio"
            >
                <html lang="es-AR" />
                <meta charSet="utf-8" />
                <meta name="description" content="La comunidad de compra y venta online más grande de América Latina." />
            </Helmet>
            <Header>
                <Input
                    label="Nunca dejes de buscar"
                    endAdornment={ <SearchIcon /> }
                    onChange={(evt) => {
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
