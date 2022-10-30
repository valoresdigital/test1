const API_URL = 'https://635da2bf07076ac24f407a88.mockapi.io/api/v1';


export async function loadUsers(){
    try {
        const response = await fetch(`${API_URL}/users`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
