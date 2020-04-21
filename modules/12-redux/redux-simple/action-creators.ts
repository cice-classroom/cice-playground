import {INCREMENT} from "./action-types";
import { Action } from 'redux'

export function increment(): Action {
  return {
    type: INCREMENT
  }
}
