import { useMutation, useQuery } from "react-query";
import { getAllposts, getSinglePost } from "../services/post.service";

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

export const useGetSinglePost = (postId: string) => {
  return useQuery({
    queryKey: ["GET_SINGLE_POST"],
    queryFn: async () => await getSinglePost(postId),
  });
};