export default function Navbar() {
  return (
    <header className='flex items-center justify-between px-8 py-5 bg-bg-color1'>
      <nav className='text-text-color space-x-5 rounded py-5'>
        <a
          href='/afterlogin'
          className='w-32 h-32 hover:scale-110 transform transition-transform hover:bg-bg-color2 font-bold py-2 px-4 rounded-lg hover:shadow-lg duration-300'
        >
          Kezdőlap
        </a>
        <a
          href='#'
          className='w-32 h-32 hover:scale-110 transform transition-transform hover:bg-bg-color2 font-bold py-2 px-4 rounded-lg hover:shadow-lg duration-300'
        >
          Beszámoló időszakok
        </a>
        <a
          href='/workselector'
          className='w-32 h-32 hover:scale-110 transform transition-transform hover:bg-bg-color2 font-bold py-2 px-4 rounded-lg hover:shadow-lg duration-300'
        >
          Munkák
        </a>
        <a
          href='#'
          className='w-32 h-32 hover:scale-110 transform transition-transform hover:bg-bg-color2 font-bold py-2 px-4 rounded-lg hover:shadow-lg duration-300'
        >
          Profil
        </a>
      </nav>
    </header>
  );
}