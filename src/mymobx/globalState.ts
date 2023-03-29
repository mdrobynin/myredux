class GlobalState {
    trackingDerivation: ((...args: any) => any) | null = null;
}

export const globalState = new GlobalState();