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
        <ul class = "your-class">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact--</a></li>
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
