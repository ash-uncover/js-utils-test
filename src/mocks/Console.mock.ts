export const getConsoleMock = () => ({
    log: jest.fn(),
    warn: jest.fn(),
    error: jest.fn()
})

export const ConsoleMock = getConsoleMock()
