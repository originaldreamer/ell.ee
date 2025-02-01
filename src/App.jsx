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
          Eesti Liputoimkonnad: Ajalugu, Tähtsus ja Töökorraldus
Sissejuhatu
Eesti lipp on tähtis rahvussümbol, mis esindab meie iseseisvust, ajalugu ja rahvuslikku identiteeti. Liputoimkonnad on organisatsioonid ja töörühmad, mis tegelevad Eesti lipu hoidmise, kasutamise ja levitamisega. Nende roll on tagada, et lipu traditsioonid ja etiketireeglid jääksid püsiteks ning et inimesed mõistaksid selle sümboli tähtsust.
Liputoimkondade ajalugu Eesti
Liputoimkondade teke on tihedalt seotud Eesti iseseisvuse ja lipu kui rahvusliku sümboli kasutuselevõtuga. Esimene Eesti lipp pühitseti 4. juunil 1884 Otepääl, kuid selle ametlikuks riigilipuks saamine toimus alles 1922. aastal.
Nõukogude okupatsiooni ajal oli sinimustvalge lipp keelatud ning selle kasutamine võis kaasa tuua rängad tagajärjed. Sellele vaatamata hoidsid paljud Eesti patrioodid lippu peidetuna ja kasutasid seda salaja. Liputoimkondade tegevus elavnes jälle 1980ndate lõpus, kui algas laulva revolutsiooni periood ja Eesti iseseisvuse taastamise protsess.
Pärast iseseisvuse taastamist 1991. aastal on Eesti liputoimkonnad jätkanud tähtsat rolli rahvuslike traditsioonide hoidmisel ja lipukultuuri edendamisel.

Liputoimkondade tähtsus ja eesmärgid

Liputoimkondadel on mitmeid olulisi ülesandeid, sealhulgas:

Lipu etiketireeglite jälgimine ja tutvustamine – Tagatakse, et lippu käsitletakse austusega ja vastavalt kehtivatele etiketireeglitele.

Avalike ürituste korraldamine – Liputoimkonnad osalevad ja korraldavad lipu pühitsemise, heiskamise ja muud sarnased tseremooniad.

Noorte harimine – Koostöös koolide ja noorteorganisatsioonidega aidatakse järgmistele põlvkondadele edasi anda teadmisi Eesti lipu ajaloost ja tähtsusest.

Lippude hooldus ja levitamine – Jälgitakse, et lipud oleksid korralikud ja vajadusel korraldatakse nende vahetamist või parandamist.

Liputoimkondade roll tänapäeval

Tänapäeval tegutsevad Eestis mitmed organisatsioonid ja ühendused, kes vastutavad lipukultuuri edendamise eest. Riiklikult jälgib lipu kasutamise korda Riigikantselei ning mitmed vabaühendused ja kohalikud omavalitsused aitavad kaasa lipu populariseerimisele.

Liputoimkonnad teevad koostööd erinevate institutsioonidega, sealhulgas Kaitseliidu, noorteorganisatsioonide ja ajaloo seltsidega. Samuti tehakse tööd selle nimel, et kodanikud teadvustaksid lipu heiskamise päevi ja nende tähtsust.

Kokkuvõte

Eesti liputoimkonnad mängivad olulist rolli meie rahvuslike sümbolite hoidmisel ja austamisel. Nende tegevus aitab säilitada ja levitada teadlikkust lipu ajaloost, etiketist ning väärtustest, mida see esindab. Iga eestlane saab omalt poolt panustada, austades ja kasutades sinimustvalget lippu vastavalt traditsioonidele ja etiketile.
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
