/*  Exercise-9 : Write a Javascript program counter (increment, decrement, 
    reset option) with an object.
*/
const exercise9 = () => {
    const counter = {
        value: 0,
        increment() {
            this.value++;
        },
        decrement() {
            this.value--;
        },
        reset() {
            this.value = 0;
        }
    }
    counter.decrement();
    counter.increment();
    counter.increment();
    alert(counter.value);

    counter.reset();
    alert(counter.value);
}