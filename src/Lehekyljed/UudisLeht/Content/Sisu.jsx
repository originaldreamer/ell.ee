import '../../../index.css';
import LinkUnderlined from '../../../General/Components/LinkUnderlined';


/*Guide
Et kirjutada teksti:
<div className="normal-text"> MA OLEN TEKSt </div >

className="" määrab stiili. Veel teksti stiile on:
    * className="big-header"   -suur pealkiri
    * className="mid-header"  -keskmine pealkiri
    * className="sub-header"  -tavaline pealkiri
    * className"normal-text"   -tavaline tekst

et lisada uus rida saab kirjutada " <br />"  näiteks:

    <div className="normal-text">
            Liputoimkondade Liit loodi eesmärgiga tugevdada liputoimkondade traditsioone ja edendada koostööd erinevate organisatsioonide vahel. <br />
            Asutamine sai alguse soovist säilitada ja arendada tseremoniaalseid tavasid, mis on olulised kultuuripärandi hoidmisel.
    </div>

et lisada loetelu saab kasutada className='loetelu' näiteks:
    <div className="sub-header">Liikmeskond ja Koostöövõrgustik</div>
    <div className='loetelu'>
        <div className='bulletPoint'>ühtse liputoimkondade võrgustiku loomine</div>
        <div className='bulletPoint'>koolituste ja ürituste korraldamine liikmetele</div>
        <div className='bulletPoint'>Eesti lipu ja sellega seotud sümbolite traditsioonide edasikandmine.</div>

    </div>

    või ilma bullet pointideta:
    <div className="sub-header">Liikmeskond ja Koostöövõrgustik</div>
    <div className='loetelu'>
        <div>ühtse liputoimkondade võrgustiku loomine</div>
        <div>koolituste ja ürituste korraldamine liikmetele</div>
        <div>Eesti lipu ja sellega seotud sümbolite traditsioonide edasikandmine.</div>

    </div>

Et muuta osa teksti boldiks, saab kasutada className='bold' näiteks:
    <div className="normal-text">
        <div className='bold'>Liputoimkondade Liit</div> loodi eesmärgiga tugevdada liputoimkondade traditsioone ja edendada koostööd erinevate organisatsioonide vahel. <br />
        Asutamine sai alguse soovist säilitada ja arendada tseremoniaalseid tavasid, mis on olulised kultuuripärandi hoidmisel.
    </div>

    
Näide, kuidas üks uudis võiks välja näha:

export default function Sisu() {
    return (
        <div>
            <div className="sub-header">Liputoimkondade Liidu Asutamine: Ajalooline Ülevaade</div>
            <div className="normal-text">
                <div className='bold'>Liputoimkondade Liit</div> loodi eesmärgiga tugevdada liputoimkondade traditsioone ja edendada koostööd erinevate organisatsioonide vahel. <br />
                Asutamine sai alguse soovist säilitada ja arendada tseremoniaalseid tavasid, mis on olulised kultuuripärandi hoidmisel.
            </div>

            <div className="sub-header">Organisatsiooni Loomise Vajadus</div>
            <div className="normal-text">
                Liidu asutamiskoosolek toimus pidulikult, kus arutati põhikirja ja strateegilisi eesmärke. <br />
                Põhilisteks eesmärkideks olid: 
                <div className='loetelu'>
                    <div className='bulletPoint'>ühtse liputoimkondade võrgustiku loomine</div>
                    <div className='bulletPoint'>koolituste ja ürituste korraldamine liikmetele</div>
                    <div className='bulletPoint'>Eesti lipu ja sellega seotud sümbolite traditsioonide edasikandmine.</div>
                
                </div>
            </div>

            <div className="sub-header">Liikmeskond ja Koostöövõrgustik</div>
            <div className="normal-text">
                Liidu liikmed koosnevad erinevate organisatsioonide esindajatest, kes jagavad ühist visiooni rahvuskultuuri säilitamisest. <br />
                Koostöö teiste rahvusvaheliste liitudega on samuti oluline osa tegevusest, et laiendada vahetust ja kogemusi.
            </div>

            <div className="sub-header">Tulevikuplaanid</div>
            <div className="normal-text">
                Liputoimkondade Liidu tegevuskava hõlmab tseremoniaalsete ürituste korraldamist, noorte kaasamist ja ajalooliste teadmiste levitamist. <br /> 
                Liidu eesmärk on olla jätkusuutlik organisatsioon, mis toetab ühiskondlikku arengut.
            </div>
        </div>
    );
}




*/

export default function Sisu() {
    return (
        <div>
            <div className="sub-header">[AI]Liputoimkondade Liidu Asutamine: Ajalooline Ülevaade</div>
            <div className="normal-text">
                <div className='bold'>Liputoimkondade Liit</div> loodi eesmärgiga tugevdada liputoimkondade traditsioone ja edendada koostööd erinevate organisatsioonide vahel. <br />
                Asutamine sai alguse soovist säilitada ja arendada tseremoniaalseid tavasid, mis on olulised kultuuripärandi hoidmisel.
            </div>

            <div className="sub-header">Organisatsiooni Loomise Vajadus</div>
            <div className="normal-text">
                Liidu asutamiskoosolek toimus pidulikult, kus arutati põhikirja ja strateegilisi eesmärke. <br />
                Põhilisteks eesmärkideks olid: 
                <div className='loetelu'>
                    <div className='bulletPoint'>ühtse liputoimkondade võrgustiku loomine</div>
                    <div className='bulletPoint'>koolituste ja ürituste korraldamine liikmetele</div>
                    <div className='bulletPoint'>Eesti lipu ja sellega seotud sümbolite traditsioonide edasikandmine.</div>
                
                </div>
            </div>

            <div className="sub-header">Liikmeskond ja Koostöövõrgustik</div>
            <div className="normal-text">
                Liidu liikmed koosnevad erinevate organisatsioonide esindajatest, kes jagavad ühist visiooni rahvuskultuuri säilitamisest. <br />
                Koostöö teiste rahvusvaheliste liitudega on samuti oluline osa tegevusest, et laiendada vahetust ja kogemusi.
            </div>

            <div className="sub-header">Tulevikuplaanid</div>
            <div className="normal-text">
                Liputoimkondade Liidu tegevuskava hõlmab tseremoniaalsete ürituste korraldamist, noorte kaasamist ja ajalooliste teadmiste levitamist. <br /> 
                Liidu eesmärk on olla jätkusuutlik organisatsioon, mis toetab ühiskondlikku arengut.
            </div>
        </div>
    );
}
