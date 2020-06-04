export interface BaseData {
  name: string
  age: number
}

export interface Base<T> {
  code: string
  data: T
  message: string
}
