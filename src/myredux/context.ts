import React from 'react';

import { Store } from './store';

const NoopStore = new Store(() => ({}), {});

export const StoreContext = React.createContext<Store>(NoopStore);
