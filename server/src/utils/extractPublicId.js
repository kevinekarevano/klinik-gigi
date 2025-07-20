const extractPublicId = (url) => {
  const parts = url.split("/");
  const publicIdWithExtension = parts.slice(-2).join("/").split(".")[0];
  return publicIdWithExtension;
};

export default extractPublicId;
