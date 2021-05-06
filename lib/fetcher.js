const WP = process.env.WORDPRESS_API;

export default async function fetcher(query,  variables = {}) {
    const res = await fetch(WP, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
    })
    const jason = await res.json()
    return jason;
}
