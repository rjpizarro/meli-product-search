import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'

import ItemSearch from './item-search'
import ItemDetails from './item-details'
import Page from '../../components/page'

const ItemsContainer = () => {
    const { path } = useRouteMatch();

    return (
        <Page>
            <Switch>
                <Route exact path={`${path}`} component={ItemSearch} />
                <Route exact path={`${path}/:id`} component={ItemDetails} />
            </Switch>
        </Page>
    )
}

export default ItemsContainer