import { dummy_posts } from "@/utils/dummy_posts";
import Post from "./studyPost";
import { useGetPostsQuery } from "@/lib/redux/api/getApi";
import { PostType } from "@/types/postType";
import { Key } from "react";
import Cookie from "js-cookie";
import { studyPostType } from "@/types/studyPostType";

interface Props {
  posts: studyPostType[], 
  studygroup_id: string | string[]
}


export default function StudyPosts({posts, studygroup_id}: Props) {
  const token = Cookie.get("token");

  //---------------------------------UI States---------------------------------
//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="text-center">
//           <svg className="animate-spin h-10 w-10 text-blue-500 mx-auto" viewBox="0 0 24 24">
//             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
//           </svg>
//           <p className="mt-4 text-gray-600">Loading posts...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <div className="text-center">
//           <p className="text-red-600 text-lg font-semibold">Failed to load posts</p>
//           <p className="text-gray-500">Please try again later.</p>
//         </div>
//       </div>
//     );
//   }

  //---------------------------------Post List---------------------------------
  return (
    <div className="max-w-3xl mx-auto py-4 space-y-6">
      {posts.map((post: studyPostType, ind: Key) => (
        <Post info={post} key={ind} studygroup_id={studygroup_id} />
      ))}
    </div>
  )}