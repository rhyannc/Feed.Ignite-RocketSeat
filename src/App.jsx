import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'
import './global.css';

const posts =[
  {
  id: 1,
  author: {
    avatarUrl: 'https://github.com/diego3g.png',
    name: 'Joe Dum',
    role: 'Full Stack',
  },
  content: [
    { type: 'paragraph', content: 'Opa 👋' },
    { type: 'paragraph', content: 'Mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
    { type: 'link', content: 'jane.design/doctorcare' },
  ],
  publishedAt: new Date('2024-12-23 21:22:10'),  
},

{
  id: 2,
  author: {
    avatarUrl: 'https://github.com/maykbrito.png',
    name: 'Mayk Brito',
    role: 'Educator @Rocketseat'
  },
  content: [
    { type: 'paragraph', content: 'Fala galera 👋' },
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
    { type: 'link', content: 'jane.design/doctorcare' },
  ],
  publishedAt: new Date('2023-05-10 20:00:00'),
},

];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <Sidebar />
        <main>
        {posts.map(post => {
            return (
              <Post key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}