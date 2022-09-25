import React from 'react';
import { Store } from "./store";
import { StoreContext } from './context';

export interface ProviderProps {
    store: Store;
    children: React.ReactNode | React.ReactNode[];
}

export const Provider = ({ store, children }: ProviderProps) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
}
