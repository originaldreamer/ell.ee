import { useState } from 'react'
import './App.css'


function App() {
  const [fileContent, setFileContent] = useState('');


  /*useEffect(() => {
    fetch('/esileheKirjeldus.txt')
      .then((response) => response.text())
      .then((data) => setFileContent(data));
  }, []);*/

  return (
    <>
    <body>
      <header>

      </header>

      <nav>
        <ul>
            <li><button className = "about_me">Dokumendid</button></li>
            <li><button className = "about_me">Tutvustus</button></li>
            <li><button className = "about_me">Lisa</button></li>
            <li><button className = "about_me">Kontaktid</button></li>
        </ul>
      </nav>
      <main>
        <h1>Eesti Liputoimkondade Liit</h1>
        <div className = "text">
          <p>
          {fileContent}
          </p>
        </div>
      </main>
      <section></section>
      <article></article>
      <aside></aside>
      <footer></footer>
    </body>
    </>
  )
}

export default App
