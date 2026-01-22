import api from "../api";
import { adminPath } from "./adminPath";
import type { IModerateData } from "./types";

export const getPendingArticle = async () => {
  try {
    const response = await api.get(adminPath.PENDINGART);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const moderateArticle = async (
  id: string,
  moderateData: IModerateData,
) => {
  try {
    const response = await api.patch(
      `${adminPath.MODERATEART}/${id}/moderate`,
      moderateData,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
