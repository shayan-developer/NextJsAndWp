import fetcher from "./fetcher";
import { AllSlugs,Ps4Slugs, GetAllComments, PostBySlug } from "./query"

export async function GetId() {
    const data = await fetcher(Ps4Slugs);
    const slug = data.data.posts.nodes

    return slug.map(sl=>{
        return{
            params:{
                ps4:sl.slug
            }
        }
    })
}
export async function GetPostById(slug) {
    const vari={
        id:slug
    }
    const post=await fetcher(PostBySlug,vari);
    
    const data=post.data.post
    return data
}
export async function GetComments(slug){
const vari={id:slug};
const post=await fetcher(GetAllComments,vari);
const comments = post.data.post
return comments
}