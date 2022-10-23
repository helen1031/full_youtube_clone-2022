export const trending = (req, res) => res.send("Trending Video");
export const search = (req, res)=> res.send("Search Video");
export const see = (req, res) => {
  console.log(req.params);
  res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => {
  console.log(req.params);
  res.send("Edit Video");
};
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  res.send("Delete Video");
};