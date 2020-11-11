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

    describe('LocalStorageMock', () => {
      test('is defined', () => {
        expect(LocalStorageMock).toBeDefined()
      })
    })
    describe('getLocalStorageMock', () => {
      test('is defined', () => {
        expect(getLocalStorageMock).toBeDefined()
      })

      test('test a basic workflow', () => {
        const storage = getLocalStorageMock()
        const value1 = 'value1'
        const value2 = { value: 'value2' }

        storage.setItem('item1', value1)
        storage.setItem('item2', value2)

        expect(storage.getItem('item1')).toEqual('"value1"')
        expect(storage.getItem('item2')).toEqual('{"value":"value2"}')

        storage.removeItem('item1')

        expect(storage.getItem('item1')).toBeNull()

        storage.clear()

        expect(storage.getItem('item1')).toBeNull()
        expect(storage.getItem('item2')).toBeNull()
      })
    })
  })
})