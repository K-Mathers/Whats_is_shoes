import api from "../api";
import { blogPath } from "./blogPath";
import type { IBlogJSON } from "./types";

export const createBlog = async (blogJSON: IBlogJSON) => {
  try {
    const response = await api.post(blogPath.CREATEBLOG, blogJSON);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
