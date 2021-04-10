const initMock = async() => {
  if (import.meta.env.MODE === 'development') {
    const { mockXHR } = await import('./index.js')
    mockXHR()
  }
}

initMock()
