export interface Input<Type> {
  label: string
  value: Type
  required?: boolean
  onChange(value: Type): void
}
