import axios from "axios";

const url = "http://localhost:9090/api/v1.0/provincia/";

export const findAllProvincias = async () => {
  try {
    return await axios.get(url).then((resp) => resp.data.result);
  } catch (err) {
  } finally {
  }
};

export const createProvincia = async (provincia) => {
  try {
    await axios.post(url, provincia);
  } catch (error) {}
};

export const findProvincia = async (id, state) => {
  try {
    await axios.get(url + `${id}`).then((resp) => state(resp.data.result));
  } catch (error) {}
};

export const updateProvincia = async (provincia, state) => {
  try {
    await axios.put(url, provincia).then((resp) => state(resp.data.result));
  } catch (error) {}
};

export const deleteProvincia = async (id) => {
  try {
    await axios.delete(url + id);
  } catch (error) {}
};
