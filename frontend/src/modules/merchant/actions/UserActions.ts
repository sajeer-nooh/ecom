import { store } from "../../../redux";
import { actions as merchanActions } from "../data/merchantReducer";



export const loginUser = async (e: any) => {
    try {
        e.preventDefault()
        const formData = new FormData(e.target)
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            body: formData,
        })
        console.log(response)
        let data = await response.json()

        localStorage.setItem('authTokens', JSON.stringify(data));
       const storeInfo = await fetch('http://127.0.0.1:8000/store/info/', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + data.access
            }}).then(res => res.json());

        store.dispatch(merchanActions.getStoreInfo(storeInfo));
    } catch (error) {
        alert('Something went wrong!')
        console.log(error)
    }
}

export const updateStorDetails = async (e: any) => {
    try {

    } catch (error) {
        console.log(error)
    }
}