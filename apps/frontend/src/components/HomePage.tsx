import { Footer } from './Footer';

export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0 bg-bg-color1 text-text-color text-center'>
      <div>
        <h1 className='text-center w-full text-xl font-bold leading-tight tracking-tight text-text-color-h1 md:text-4xl dark:text-bg-color2'>
          Welcome to SprintReview
        </h1>
        <p>Valami leírás az oldalról. (Miért készült, kiknek stb...)</p>
      </div>
      <div>
        {/* prettier-ignore */}
        <p className='flex items-center mb-6 text-2xl font-semibold dark:text-bg-color2 whitespace-nowrap text-center'>
            <a className='text-gray-500 dark:text-bg-color2 underline' href='/registration'>
              Sign up
            </a>
            &nbsp;or&nbsp;
            <a className='text-gray-500 dark:text-bg-color2 underline' href='/login'>
              log in
            </a>
            &nbsp;to get started
          </p>
      </div>
      <a href='https://github.com/kir-dev/sprint-review-app' target='_blank' rel='noreferrer'>
        <Footer />
      </a>
    </div>
  );
}
