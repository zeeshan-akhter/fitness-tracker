import axios from "axios";

const BASE_URL = 'https://buzz-fitness-backend.zeeshanakhter.repl.co';



export const fetchFood = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/food/${userId}`);
        if (response.status === 200) {
            const food = response.data.foods;
            return food
        }

    } catch (error) {
        throw new Error(`${error.message}`)
    }
}

export const deleteFoodItem = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/food` + id)
        if (response.status === 200) {
            const data = response.data.deletedFoodItem
            return data
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}


export const createFoodItem = async (newFood) => {
    try {
        const response = await axios.post(`${BASE_URL}/food`, newFood);
        if (response.status === 200) {
            const data = response.data.newFood;
            return data
        }
    } catch (error) {
        throw new Error(`${error.message}`)
    }
}