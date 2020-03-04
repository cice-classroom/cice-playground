export interface Input<T> {
  label: string
  required?: boolean
  value: T
  onChange(value: T): void
}
