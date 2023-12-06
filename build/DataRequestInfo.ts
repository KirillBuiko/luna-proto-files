// Original file: grpc/data_requests.proto

import type { RequestType as _RequestType, RequestType__Output as _RequestType__Output } from './RequestType';
import type { VariableDataInfo as _VariableDataInfo, VariableDataInfo__Output as _VariableDataInfo__Output } from './VariableDataInfo';
import type { TaskDataInfo as _TaskDataInfo, TaskDataInfo__Output as _TaskDataInfo__Output } from './TaskDataInfo';

export interface DataRequestInfo {
  'requestType'?: (_RequestType);
  'variableDataInfo'?: (_VariableDataInfo | null);
  'taskDataInfo'?: (_TaskDataInfo | null);
  'infoType'?: "variableDataInfo"|"taskDataInfo";
}

export interface DataRequestInfo__Output {
  'requestType'?: (_RequestType__Output);
  'variableDataInfo'?: (_VariableDataInfo__Output);
  'taskDataInfo'?: (_TaskDataInfo__Output);
  'infoType': "variableDataInfo"|"taskDataInfo";
}
