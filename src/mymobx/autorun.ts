import { globalState } from "./globalState"

export function autorun(callback: (...args: any) => any) {
    const prevTrackingDerivation = globalState.trackingDerivation;
    globalState.trackingDerivation = callback;
    callback();
    globalState.trackingDerivation = prevTrackingDerivation;
}