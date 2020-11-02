import posts from "./_posts.js";

const contents = JSON.stringify(
  posts.map((post) => {
    return {
      ke: post.ke,
      judul: post.judul,
      slug: post.slug,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
