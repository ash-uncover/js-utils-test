import { ConsoleMock, getConsoleMock } from 'index'
import { LocalStorageMock, getLocalStorageMock } from 'index'

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