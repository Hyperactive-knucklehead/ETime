// for carousel section

const mainPosts = document.querySelectorAll(".main-post");
const posts = document.querySelectorAll(".post");

let i = 0;
let postIndex = 0;
let currentMainPost = mainPosts[postIndex];
let currentPost = posts[postIndex];
const progress = () => {
  if (i === 100) {
    i = -5;
    // reset progress bar
    // for desktop
    currentPost.querySelector(".progress-bar__fill").style.width = 0;
    // for mobile
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = 0;

    currentPost.classList.remove("post--active");

    postIndex++;

    currentMainPost.classList.add("main-post--not-active");
    currentMainPost.classList.remove("main-post--active");

    // reset postIndex to loop over the slides again
    if (postIndex === posts.length) {
      postIndex = 0;
    }

    currentPost = posts[postIndex];
    currentMainPost = mainPosts[postIndex];
  } else {
    i++;
    // for desktop

    currentPost.querySelector(".progress-bar__fill").style.width = `${i}%`;
    // for mobile
    document.querySelector(
      ".progress-bar--primary .progress-bar__fill"
    ).style.width = `${i}%`;

    currentPost.classList.add("post--active");

    currentMainPost.classList.add("main-post--active");
    currentMainPost.classList.remove("main-post--not-active");
  }
};
const progressInterval = setInterval(progress, 70);
