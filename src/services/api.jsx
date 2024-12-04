import React from 'react';
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async (page, limit, query = "") => {
  try {
    const url = `${API_URL}?_page=${page}&_limit=${limit}&q=${query}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export const getPost = (id) => axios.get(`${API_URL}/${id}`);
export const createPost = (post) => axios.post(API_URL, post);
export const updatePost = (id, post) => axios.put(`${API_URL}/${id}`, post);
export const deletePost = (id) => axios.delete(`${API_URL}/${id}`);
