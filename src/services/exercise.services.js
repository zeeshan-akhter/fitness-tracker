import axios from "axios";

const BASE_URL = "https://buzz-fitness-backend.zeeshanakhter.repl.co/api/v1";

export const fetchExercise = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/exercises/${userId}`);
    if (response.status === 200) {
      const data = response.data.exercise;
      return data;
    }
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const deleteExercise = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/exercises/${id}`);
    if (response.status === 200) {
      const data = response.data.deletedExercise;
      location.reload();
      return data;
    }
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};

export const createNewExercise = async (newExercise) => {
  try {
    console.log(newExercise);
    const response = await axios.post(`${BASE_URL}/exercises`, newExercise);
    if (response.status === 200) {
      const data = response.data.newExercise;
      location.reload();
      return data;
    }
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
