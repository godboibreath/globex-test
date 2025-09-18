declare namespace Utils {
    type Debounce = (cb: (...arg: unknown[]) => void, delay: number) => (...a: unknown[]) => void;
}
