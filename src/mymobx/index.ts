import { ObservableValue } from "./observableValue";
import { autorun } from "./autorun";

const counter = new ObservableValue({ count: 0 }) as any;

console.log(counter);

function listener() {
    console.log(counter.count)
}

autorun(listener);

function increment() {
    counter.count++;
}

setInterval(increment, 500);