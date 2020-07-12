import React from 'react';
import withDataFetching from '../withDataFetching';

export const ItemContext = React.createContext();

const ItemsContextProvider = ({ children, data }) => (
    <ItemsContext.Provider value={{ items: data }}>
        { children }
    </ItemsContext.Provider>
);

export default withDataFetching({
    dataSource: 'https://my-json-server.typicode.com/PacktPublishing/React-Projects/items',
})(ItemsContextProvider);