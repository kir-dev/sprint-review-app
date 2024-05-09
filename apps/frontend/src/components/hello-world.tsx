export function SprintLogin() {
  return (
    <div className='flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0'>
      <a href='#' className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-bg-color2' />
      <div className='w-full bg-bg-color2 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
          <h1 className='text-xl font-bold leading-tight tracking-tight text-text-color-h1 md:text-4xl dark:text-bg-color2'>
            Sprint Review bejelentkezés
          </h1>
          <form className='space-y-4 md:space-y-6' action='#'>
            <div>
              <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>Email cím</label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='example@gmail.com'
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>Jelszó</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='••••••••'
                className='bg-bg-color2 border border-gray-300 text-white sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-bg-color2 dark:focus:ring-blue-500 dark:focus:border-blue-500'
              />
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='remember'
                    aria-describedby='remember'
                    type='checkbox'
                    className='w-4 h-4 border border-gray-300 rounded bg-bg-color1 focus:ring-3 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800'
                  />
                </div>
                <div className='ml-3 text-sm'>
                  <label className='text-text-color dark:text-gray-300'>Emlékezz rám</label>
                </div>
              </div>
              <a href='#' className='text-text-color text-sm font-medium hover:underline dark:text'>
                Elfelejetted a jelszavad?
              </a>
            </div>
            <button
              type='submit'
              className='border font-semibold w-full text-text-color rounded-lg text-sm px-5 py-2.5 text-center border-[#8b97a4] hover:border-text-color hover:bg-[#2c3540] focus:ring-4'
            >
              Bejelentkezés
            </button>
            <label className='block mb-2 text-sm font-medium text-text-color dark:text-bg-color2'>
              Bejelentkezés másképp:
            </label>
            <div className='px-6 sm:px-0 max-w-sm'>
              <button
                type='button'
                className='text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2'
              >
                <svg
                  className='mr-2 -ml-1 w-4 h-4'
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fab'
                  data-icon='google'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 488 512'
                >
                  <path
                    fill='currentColor'
                    d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
                  />
                </svg>
                Log in with Google
                <div />
              </button>
            </div>
            <button className='w-full text-white bg-[#4285F4] focus:ring-[#4285F4]/50 hover:bg-[#4285F4]/90 focus:outline-none focus:ring font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
              AutSch
            </button>
            <p className='text-sm font-light text-text-color dark:text-gray-400'>
              Nincs még felhasználód?{' '}
              <a href='#' className='text-text-color font-medium text hover:underline dark:text'>
                Regisztráció
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className='bg-page-bg-color flex flex-col items-center justify-center'>
      <p className='text-gray-500 text-sm'>@Kir-Dev pod-oscar</p>
    </footer>
  );
}

export function WorkSelector() {
  return (
    <div className='w-full bg-bg-color2 rounded-lg shadow sm:max-w-md dark:bg-gray-800 dark:border-gray-700 m-auto border text-text-color md:text-m border-gray-700 flex flex-col py-8 mx-auto lg:py-0'>
      <a href='#' className='flex items-center mb-6 text-2xl' />
      <h1 className='ml-10 text-text-color-h1 md:text-4xl leading-tight tracking-tight font-bold py-6'>
        Munka Leadása
      </h1>
      <p className='ml-10'>Milyen projekten dolgoztál az utóbbi időben?</p>
      <div className='relative px-10 py-4'>
        <select className='bg-bg-color2 border-text-color border rounded-lg text-left px-5 py-2.5 w-full text-text-color hover:bg-[#2c3540] focus:ring-4 text-xl otuline outline-bg-color2 outline-offset-0'>
          <option />
          <option className=''>Option 1</option>
          {/*Amikor ráviszem a kurzort, akkor a háttérszínt meg kell változtatni*/}
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
        <div className='ml-3 text-sm text-right py-6'>
          <label className='text-text-color dark:text-gray-300'>
            <a href='# ' className='hover:underline font-medium-bold text-sm dark:text '>
              Folytatás
            </a>
          </label>
        </div>
      </div>
    </div>
  );
}
