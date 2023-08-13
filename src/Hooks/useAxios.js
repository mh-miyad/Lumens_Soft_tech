import { useState } from "react";
import axios from "axios";

const useAxios = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const instance = axios.create({
    // baseURL: "https://lumen-backend.vercel.app",
    baseURL: "https://lumen-beckend-mh-miyad.vercel.app",
    // baseURL: "http://localhost:5000",
  });

  const get = async (url) => {
    try {
      setLoading(true);
      const response = await instance.get(url);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error;
    }
  };
  const post = async (url, data) => {
    try {
      setLoading(true);
      const response = await instance.post(url, data);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error;
    }
  };
  const put = async (url, data) => {
    try {
      setLoading(true);
      const response = await instance.put(url, data);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error;
    }
  };

  const del = async (url) => {
    try {
      setLoading(true);
      const response = await instance.delete(url);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error;
    }
  };

  const patch = async (url, data) => {
    try {
      setLoading(true);
      const response = await instance.patch(url, data);
      setLoading(false);
      return response.data;
    } catch (error) {
      setLoading(false);
      setError(error);
      throw error;
    }
  };

  return { loading, error, get, post, put, del, patch };
};

export default useAxios;
