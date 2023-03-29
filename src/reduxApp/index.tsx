import React from 'react';

import { Provider } from '../myredux';
import { store } from './store';
import { Service } from './services/service';
import { useService } from './services/useService';

const Component = () => {
    const service = useService(Service);

    // return (
    //     <div>
    //         <div>
    //             <button onClick={service.increaseCounter}>increase</button>
    //         </div>
    //         <div>
    //             <button onClick={service.decreaseCounter}>decrease</button>
    //         </div>
    //         <div>
    //             <button onClick={service.load}>load</button>
    //         </div>
    //         <div>
    //             {service.counter}
    //         </div>
    //         <div>{service.message}</div>
    //     </div>
    // );
    return <div>{service.getCounter()}</div>
};

export const ReduxApp = () => {
    return (
        <Provider store={store}>
            <Component />
        </Provider>
    );
};
