import SoftBun from 'soft_bun';

type SubscriberCallback<T> = (state: T) => void;

type NestedObject<T> = {
    [K in keyof T]: T[K] extends object ? NestedObject<T[K]> : T[K];
};

class StateManager<T extends object> {
    private state: SoftBun<NestedObject<T>>;
    private subscribers: SubscriberCallback<T>[];

    constructor(initialState: T) {
        this.state = new SoftBun(initialState as NestedObject<T>);
        this.subscribers = [];
    }

    getState(): T {
        return this.state.state as T;
    }

    setState(partialState: Partial<T>): void {
        Object.assign(this.state.state, partialState);
        this.triggerSubscribers();
    }

    subscribe(callback: SubscriberCallback<T>): void {
        this.subscribers.push(callback);
    }

    private triggerSubscribers(): void {
        const currentState = this.getState();
        this.subscribers.forEach((subscriber) => subscriber(currentState));
    }

    reactive<K extends keyof T>(key: K, expression: string): void {
        this.state.reactive(key as string, `${expression}`);
    }
}

export default StateManager;
