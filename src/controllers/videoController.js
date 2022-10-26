let videos = [
  {
    title: "Video #1",
    rating : 5,
    comments: 2,
    createdAt : "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Video #2",
    rating : 5,
    comments: 2,
    createdAt : "2 minutes ago",
    views: 1,
    id: 2,
  },
  {
    title: "Video #3",
    rating : 5, 
    comments: 2,
    createdAt : "2 minutes ago",
    views: 59,
    id: 3,
  }
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos});
};
export const search = (req, res)=> res.send("Search Video");
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id-1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video});
};
export const edit = (req, res) => {
  console.log(req.params);
  res.send("Edit Video");
};
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  res.send("Delete Video");
};