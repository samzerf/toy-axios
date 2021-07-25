import { Canceler, CancelExecutor, CancelTokenSource } from "../types"
import Cancel from "./Cancel"

export default class CancelToken {
  promise: Promise<Cancel>
  reason?: Cancel

  constructor(executer: CancelExecutor) {
    this.promise = new Promise<Cancel>(resolve => {
      executer(message => {
        if (this.reason) {
          return
        }
        this.reason = new Cancel(message)
        resolve(this.reason)
      })
    })
  }

  throwIfRequested(): void {
    if (this.reason) {
      throw this.reason
    }
  }

  static source(): CancelTokenSource {
    let cancel!: Canceler
    const token = new CancelToken(c => {
      cancel = c
    })
    return {
      token,
      cancel
    }
  }
}