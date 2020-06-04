export interface TdDataItem {
  name: string
  status: boolean
}

export interface TdDataRes<T> {
  code: string
  data?: T[]
  message: string
}
