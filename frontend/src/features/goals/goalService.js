import axios from 'axios'

const API_URL = '/api/goals/'

// part3 Service functions
// hadi hia l fct li kat3ayet l backend API
// Create new goal
const createGoal = async (goalData, token) => {
    // hnaya kan3aytou l backend API bach ncreatew goal jdida
    const config = {
        // headers hia object fih l headers li ghadi nbsatohom m3a request
        headers: {
            // hnaya katdkhl token f headers bach n9dro nverifyiw user f backend ou ndiro lih authorization ou Bearer hia standard way for token auth
            Authorization: `Bearer ${token}`,
        },
    }
    const response = await axios.post(API_URL, goalData, config)
    return response.data
}
// part5 Service functions
// Get user goals
const getGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL, config)

    return response.data
}
// part7-------- delete ------
// Delete user goal
const deleteGoal = async (goalId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.delete(API_URL + goalId, config)

    return response.data
}

const goalService = {
    createGoal,
    getGoals,
    deleteGoal,
}

export default goalService