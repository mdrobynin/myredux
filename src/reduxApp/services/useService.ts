import { useStoreState, useDispatch } from '../../myredux';

import { BaseService } from './baseService';

const CACHE = new Map<any, any>();

export function useService<T extends BaseService>(service: new () => T): T {
    const dispatch = useDispatch();
    const state = useStoreState();
    const getState = () => state;

    if (!CACHE.has(service)) {
        const instance = new service();
        instance.dispatch = dispatch.bind(instance);
        instance.getState = getState.bind(instance);

        const proto = (instance as any).__proto__;
        
        for (let key in proto) {
            console.log(key)
        }

        console.log(proto, instance)

        CACHE.set(service, instance);
    }

    return CACHE.get(service) as T;
}
