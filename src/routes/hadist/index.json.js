import hadist from "./_hadist.js";

const contents = JSON.stringify(
  hadist.map((item) => {
    return {
      id: item.id,
      nama_hadist: item.nama_hadist,
      path: item.path,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
