export const getPosts = async () =>
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

export const getComments = async ({ postId }) =>
  await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, {
    method: "GET",
  });
