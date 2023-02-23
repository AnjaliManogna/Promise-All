const user = {
  name: "John",
  lastActivityTime: null,
  posts: [],
};

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.posts.push(post);
      resolve();
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      user.lastActivityTime = new Date();
      resolve();
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.posts.length > 0) {
        const deletedPost = user.posts.pop();
        resolve(deletedPost);
      } else {
        reject("ERROR: No posts to delete");
      }
    }, 1000);
  });
}

createPost("Post 1")
  .then(() => updateLastUserActivityTime())
  .then(() => {
    console.log("Posts:", user.posts);
    console.log("Last Activity Time:", user.lastActivityTime);
    return createPost("Post 2");
  })
  .then(() => updateLastUserActivityTime())
  .then(() => {
    console.log("Posts:", user.posts);
    console.log("Last Activity Time:", user.lastActivityTime);
    return deleteLastPost();
  })
  .then((deletedPost) => {
    console.log("Deleted Post:", deletedPost);
    console.log("Posts:", user.posts);
  })
  .catch((error) => console.error(error));
