import hadists from "./_hadists.js";

const contents = JSON.stringify(
  hadists.map((item) => {
    return {
      judul: item.judul,
      slug: item.slug,
    };
  })
);

export function get(res, req) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  req.end(contents);
}
