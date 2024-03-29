export const loginUser = async (e: any) => {
    try {
        console.log(e.target)
        e.preventDefault()
        const formData = new FormData(e.target)
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            body: formData,
        })
        console.log(response)
        let data = await response.json()
        console.log(data)

        localStorage.setItem('authTokens', JSON.stringify(data))
    } catch (error) {
        alert('Something went wrong!')
        console.log(error)
    }
}

export const registerUser = async (e: any) => {
    try {
        e.preventDefault()
        const formData = new FormData(e.target)
        let response = await fetch('http://127.0.0.1:8000/register', {
            method: 'POST',
            body: formData,
        })
        let data = await response.json();
        console.log(data)
        localStorage.setItem('authTokens', JSON.stringify(data))
    } catch (error) {
        alert('Something went wrong!')
        console.log(error)
    }
}