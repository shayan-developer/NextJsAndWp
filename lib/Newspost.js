import fetcher from "./fetcher";
import { AllSlugs,Ps4Slugs, GetAllComments, PostBySlug, XboxSlugs } from "./query"
// this method for get all slugs in ps4 category
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
//this mothod for get a post by slug
export async function GetPostById(slug) {
    const vari={
        id:slug
    }
    const post=await fetcher(PostBySlug,vari);
    
    const data=post.data.post
    return data
}
// this method for get all comments from a post
export async function GetComments(slug){
const vari={id:slug};
const post=await fetcher(GetAllComments,vari);
const comments = post.data.post
return comments
}
//this method for get all post;s slugs in xbox category
export async function GetXboxSlugs () {
    const res = await fetcher(XboxSlugs);
    const slugs=res.data.posts.nodes;
    return slugs.map(slug=>{
        return{
            params:{xbox:slug.slug}
        }
    })
}