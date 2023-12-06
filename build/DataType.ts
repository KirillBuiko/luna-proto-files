// Original file: grpc/enums.proto

export const DataType = {
  UNKNOWN_DATA_TYPE: 'UNKNOWN_DATA_TYPE',
  FILE: 'FILE',
  TEXT: 'TEXT',
  LINK: 'LINK',
} as const;

export type DataType =
  | 'UNKNOWN_DATA_TYPE'
  | 0
  | 'FILE'
  | 1
  | 'TEXT'
  | 2
  | 'LINK'
  | 3

export type DataType__Output = typeof DataType[keyof typeof DataType]
