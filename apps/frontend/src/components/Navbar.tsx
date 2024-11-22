export default function Navbar() {
  return (
    <header className='flex flex-col items-center justify-between px-8 py-5 bg-page-bg-color sticky top-0'>
      <nav className='text-text-color space-x-5 rounded py-5'>
        <a
          href='/afterlogin'
          className='w-32 h-32 hover:scale-110 transform hover:bg-bg-color1 font-bold py-2 px-4 rounded-lg hover:shadow-lg transition duration-300'
        >
          Kezdőlap
        </a>
        <a
          href='/reportingperiod'
          className='w-32 h-32 hover:scale-110 transform hover:bg-bg-color1 font-bold py-2 px-4 rounded-lg hover:shadow-lg transition duration-300'
        >
          Beszámoló időszakok
        </a>
        <a
          href='/currentjobs'
          className='w-32 h-32 hover:scale-110 transform hover:bg-bg-color1 font-bold py-2 px-4 rounded-lg hover:shadow-lg transition duration-300'
        >
          Munkák
        </a>
        <a
          href='/newproject'
          className='w-32 h-32 hover:scale-110 transform hover:bg-bg-color1 font-bold py-2 px-4 rounded-lg hover:shadow-lg transition duration-300'
        >
          Új Projekt
        </a>
      </nav>
    </header>
  );
}
