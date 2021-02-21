import axios from "axios";

console.log("lesson 3");

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU

// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// just a plug
const JSONPlaceholderConfig = {
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
};

const axiosInstance2 = axios.create(JSONPlaceholderConfig);

export const JSONPlaceholderAPI = {
  getPosts: (userId: number) => {
    return axiosInstance2.get(`posts`);
  },
  setPost: (postData: { title: string; body: string; userId: number }) => {
    return axiosInstance2.post(`posts`, postData);
  },
};

const test = async () => {
  await JSONPlaceholderAPI.getPosts(1).then((r) => {
    console.log(r);
  });
  await JSONPlaceholderAPI.setPost({
    title: "First Post",
    body: "Hello this is my firs post",
    userId: 1,
  }).then((r) => {
    console.log(r);
  });
  await JSONPlaceholderAPI.getPosts(1).then((r) => {
    console.log(r);
  });
};

test();

export default () => {};



