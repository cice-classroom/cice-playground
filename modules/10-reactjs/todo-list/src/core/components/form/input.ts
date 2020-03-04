export interface Input<T> {
  label: string
  value: T
  onChange(value: T): void
}
