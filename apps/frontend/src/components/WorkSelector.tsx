import { Footer } from './footer';

export function WorkSelector() {
  return (
    <div className='flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0'>
      <a href='#' className='flex items-center mb-6 text-2xl' />
      <div className='w-full bg-bg-color2 rounded-lg shadow sm:max-w-md dark:bg-gray-800 dark:border-gray-700 m-auto border text-text-color md:text-m border-gray-700 flex flex-col py-8 mx-auto lg:py-0'>
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
      <a href='https://github.com/kir-dev/sprint-review-app' target='_blank' rel='noreferrer'>
        <Footer />
      </a>
    </div>
  );
}
