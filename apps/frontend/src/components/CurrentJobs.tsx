import Navbar from './Navbar';

export default function CurrentJobs() {
  return (
    <div className='flex flex-col items-center justify-center px-8 py-8 mx-auto md:h-screen lg:py-0'>
      <Navbar />
      <div className='text-center pt-8'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-text-color-h1 md:text-4xl dark:text-bg-color2'>
          Munkák
        </h1>
      </div>
      <div />
    </div>
  );
}
