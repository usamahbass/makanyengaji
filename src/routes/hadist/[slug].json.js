import hadists from "./_hadists";

const lookup = new Map();

hadists.forEach((item) => {
  lookup.set(item.slug, JSON.stringify(item));
});
export function get(req, res, next) {
  
  const { slug } = req.params;

  if (lookup.has(slug)) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: `Not found`,
      })
    );
  }
}
