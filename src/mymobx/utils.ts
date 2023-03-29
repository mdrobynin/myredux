import { $$observable } from './constants';

export const isPrimitive = (value: any) => ['string', 'number', 'boolean', 'null', 'undefined', 'symbol', 'bigint'].includes(typeof value);
export const isObservable = (value: any) => value[$$observable];
export const isFunction = (value: any) => typeof value === 'function';
export const isPureObject = (value: any) => typeof value === 'object' && !Array.isArray(value);
