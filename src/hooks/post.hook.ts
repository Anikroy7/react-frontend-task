import { useMutation } from "react-query";
import getAllposts from "../services/post.service";

export const useGetAllposts = () => {
  return useMutation<any, Error>({
    mutationKey: ["GET_ALL_POSTS"],
    mutationFn: async () => {
      return await getAllposts();
    },
    onSuccess: (data) => {
      if (data) {
        return data;
      }
    },
  });
}