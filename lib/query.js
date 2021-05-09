//this is for All posts
export const AllPosts = `
query MyQuery {
  posts {
    nodes {
      slug
      categories {
        nodes {
          name
        }
      }
      title
      id
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
}

  `
// this is for get all posts slug 
export const AllSlugs = `
  query MyQuery {
    posts {
      nodes {
        slug
      }
    }
  }
  `
// this is for get post by slug
export const PostBySlug = `
  query MyQuery ($id:ID!){
    post(idType: SLUG, id:$id) {
      id
      content
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
  `
// this is for get all comments in post
export const GetAllComments = `
  query MyQuery($id: ID!) {
    post(id: $id, idType: SLUG) {
      commentCount
      comments {
        nodes {
          content
          author {
            node {
              name
            }
          }
        }
      }
    }
  }
  `
// this query for get all post in category Ps4
export const Ps4Posts = `
  query MyQuery {
    posts(where: {categoryName: "ps4"}) {
      nodes {
        slug
        content
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
  
  `
// get slugs in ps4 category
export const Ps4Slugs = `
  query MyQuery {
    posts(where: {categoryName: "ps4"}) {
      nodes {
        slug
      }
    }
  }
  `
// this query for get all posts in xbox category
export const XboxPosts = `
  query MyQuery {
    posts(where: {categoryName: "xbox"}) {
      nodes {
        slug
        content
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
  `
// this query for get all post's slugs in xbox category
export const XboxSlugs = `
  query MyQuery {
    posts(where: {categoryName: "xbox"}) {
      nodes {
        slug
      }
    }
  }
  `
  //this query for get 3 recent post
  export const RecentPost=`
  query MyQuery($name:String!) {
    posts(first: 3, where: {categoryName: $name}){
      nodes {
        slug
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
  `