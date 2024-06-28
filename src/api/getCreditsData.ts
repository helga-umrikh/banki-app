const getCreditsData = async (url: string) => {
    try {
        await new Promise<void>((res) => {
            setTimeout(() => {
                res()
            }, 3000)
        })
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log('Ошибка при получении данных:', error)
    }
}

export { getCreditsData }
