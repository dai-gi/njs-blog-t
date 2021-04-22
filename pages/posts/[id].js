import { useRouter } from "next/router";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function PostData([ post ]) {
    const router = useRouter();
    
    if (router.isFallback || !post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="space-y-5 w-full">
            <div className="flex justify-center flex-col items-center mb-5">
                <h1 className="text-3xl mb-3 font-bold">{post.title}</h1>
                <p className="mb-3">{post.cleated_at}</p>
                <div className="border w-14"></div>
            </div>
            <p className="whitespace-pre-wrap">{post.content}</p>
        </div>
    );
}
