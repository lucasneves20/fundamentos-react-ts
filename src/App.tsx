import { IPostProps, Post } from "./components/Post";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

const posts: IPostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/69198104?v=4",
      name: "Lucas Neves",
      role: "Web Developer Front-end Student",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "O Brabo da Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishAt: new Date("2022-05-10 20:00:00"),
  },
];

function App() {
  return (
    <>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={`post-${post.id}`} post={post} />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
