type Subscriber<T> = (args: T) => void;

export class Observable<T> {
    private subscribers: Subscriber<T>[] = [];

    public subscribe(subscriber: Subscriber<T>) {
        const shouldSubscribe = subscriber
            && typeof subscriber === 'function'
            && !this.subscribers.includes(subscriber)

        if (shouldSubscribe) {
            this.subscribers.push(subscriber);
        }

        return shouldSubscribe;
    }

    public emit(value: T) {
        this.subscribers.forEach(subscriber => subscriber(value));
    }
}
