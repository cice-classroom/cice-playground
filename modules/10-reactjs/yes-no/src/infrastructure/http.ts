export class Http {
  async get<Result>(url: string): Promise<Result> {
    const response = await fetch(url)
    return this.getResponse(response)
  }

  async post<Result, Entity>(url: string, entity: Entity): Promise<Result> {
    const response = await fetch(url, { method: 'POST', body: JSON.stringify(entity) })
    return this.getResponse(response)
  }

  async put<Result, Entity>(url: string, entity: Entity): Promise<Result> {
    const response = await fetch(url, { method: 'PUT', body: JSON.stringify(entity) })
    return this.getResponse(response)
  }

  async delete<Result>(url: string): Promise<Result> {
    const response = await fetch(url, { method: 'DELETE' })
    return this.getResponse(response)
  }

  private async getResponse<Result>(response: Response): Promise<Result> {
    const result = await response.json()
    return result as Result
  }
}
