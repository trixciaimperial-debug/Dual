import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export const getStudents = async () => {
  try {
    const response = await axios.get(API_URL)
    return { data: response.data, error: null }
  } catch (error) {
    return {
      data: [],
      error: error.message || 'Failed to fetch students.',
    }
  }
}

export const getStudentById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    return { data: response.data, error: null }
  } catch (error) {
    return {
      data: null,
      error: error.message || 'Failed to fetch student details.',
    }
  }
}
