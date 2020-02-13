class LocalStorageMockCreator {
  private store: any = {}

  constructor() {
    this.store = {}
  }

  clear() {
    this.store = {}
  }

  getItem(key: string) {
    return this.store[key] || null
  }

  setItem(key: string, value: any) {
    this.store[key] = value.toString()
  }

  removeItem(key: string) {
    delete this.store[key]
  }
}

export const LocalStorageMock = new LocalStorageMockCreator()
export const getLocalStorageMock = () => new LocalStorageMockCreator()
