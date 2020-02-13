import { ConsoleMock, getConsoleMock } from '../src/index'
import { LocalStorageMock, getLocalStorageMock } from '../src/index'

describe('mocks', () => {

  describe('console', () => {

    test('ConsoleMock', () => {
      expect(ConsoleMock).toBeDefined()
    })
    test('getConsoleMock', () => {
      expect(getConsoleMock).toBeDefined()
    })
  })

  describe('localStorage', () => {

    test('LocalStorageMock', () => {
      expect(LocalStorageMock).toBeDefined()
    })
    test('getLocalStorageMock', () => {
      expect(getLocalStorageMock).toBeDefined()
    })
  })
})