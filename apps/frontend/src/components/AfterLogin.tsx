import { Footer } from './Footer';

export default function GreetingsPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex justify-center py-8'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-text-color-h1 md:text-4xl dark:text-bg-color2'>
          Kir-Dev Sprint Review
        </h1>
      </div>
      <div className='max-w-4xl text-center py-4 px-6 text-text-color'>
        <p className='text-lg'>
          A félév végi közösségi pontozás az itt leadott munkák alapján fog történni. Azonban ennek nem az az egyetlen
          célja, hogy a szorgos tagok biztos bejussanak a koliba, hanem az is, hogy a Ház vezetése lássa, mennyi munkát
          végzett a Kir-Dev a félév során. Ezért szeretném kérni, hogy{' '}
          <b>azok is töltsék ki ezt a formot minél pontosabban, akiknek nincs szüksége közösségi pontra!</b>
        </p>
      </div>
      <div className='flex flex-col items-center justify-center flex-grow '>
        <div className='flex flex-row gap-x-4 items-center justify-center'>
          <a
            href='/reportingperiod'
            className='block w-64 h-96 max-w-sm py-6 px-6 bg-bg-color2 border border-black rounded-lg shadow hover:bg-bg-color1 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
          >
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-text-color dark:text-white'>
              Beszámolási időszakok
            </h5>
            <p className='font-normal text-text-color dark:text-gray-400'>
              Válaszd ki, melyik időszakról számolnál be! Nem baj, ha az itt kiválasztott időszak előttről is felsorolsz
              munkákat, lényeg csak hogy minden munka egyszer szerepeljen.
            </p>
          </a>
          <a
            href='/currentjobs'
            className='block w-64 h-96 max-w-sm p-6 bg-bg-color2 border border-black rounded-lg shadow hover:bg-bg-color1 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
          >
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-text-color dark:text-white'>Munkák</h5>
            <p className='font-normal text-text-color dark:text-gray-400'>Láthatod a jelenleg zajló</p>
            <ul className='font-normal text-text-color dark:text-gray-400'>
              <li>Felelős pozíciókhoz tartozó munkákat</li>
              <li>Projektmunkákat</li>
              <li>Tanfolyamokat, mentorálási alkalmakat vagy workshopokat</li>
              <li>Üzemeltetéseket</li>
              <li>Operatív munkákat</li>
              <li>Simonyihoz tartozó munkákat</li>
              <li>Egyéb munkákat</li>
            </ul>
          </a>
          <a
            href='#'
            className='block w-64 h-96 max-w-sm p-6 bg-bg-color2 border border-black rounded-lg shadow hover:bg-bg-color1 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
          >
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-text-color dark:text-white'>Profil</h5>
            <p className='font-normal text-text-color dark:text-gray-400'>
              Itt láthatod a korábbi beszámolóidat, és a profilodat is itt tudod szerkeszteni.
            </p>
          </a>
        </div>
        <a href='https://github.com/kir-dev/sprint-review-app' target='_blank' rel='noreferrer'>
          <Footer />
        </a>
      </div>
    </div>
  );
}
