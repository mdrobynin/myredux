import React from 'react';

import { Store } from './store';
import { AnyState } from './types';

const NoopStore = new Store<AnyState>(() => ({}), {});

export const StoreContext = React.createContext<Store>(NoopStore);
