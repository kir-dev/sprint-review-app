export function ReportingPeriod() {
  return (
    <div className='flex flex-col w-1/2'>
      <div className='text-center pt-8'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-text-color-h1 md:text-4xl dark:text-bg-color2'>
          Beszámolási időszakok
        </h1>
      </div>
      <div className='flex pt-16 items-center justify-center'>
        <div className='text-text-color items-center justify-center w-full'>
          <table className='min-w-full max-w-lg text-center text-sm font-light text-surface dark:text-white'>
            <thead className='border-b border-neutral-200 font-medium dark:border-white/10 text-2xl'>
              <tr>
                <th className='px-6 py-4'>Időszakok</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-bg-color1 dark:border-white/10 dark:hover:bg-neutral-600'>
                <td className='float-left whitespace-nowrap px-6 py-4 font-medium tracking-wider'>
                  <a href='#'>2021.01.01 - 2021.01.15</a>
                </td>
                <td className='float-right whitespace-nowrap px-6 py-4 font-medium'>Pipa vagy x</td>
              </tr>
              <tr className='border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-bg-color1 dark:border-white/10 dark:hover:bg-neutral-600'>
                <td className='float-left whitespace-nowrap px-6 py-4 font-medium tracking-wider'>
                  <a href='#'>2021.01.16 - 2021.02.01.</a>
                </td>
                <td className='float-right whitespace-nowrap px-6 py-4 font-medium'>Pipa vagy x</td>
              </tr>
              <tr className='border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-bg-color1 dark:border-white/10 dark:hover:bg-neutral-600'>
                <td className='float-left whitespace-nowrap px-6 py-4 font-medium tracking-wider'>
                  <a href='#'>2021.02.02. - 2021.02.15.</a>
                </td>
                <td className='float-right whitespace-nowrap px-6 py-4 font-medium'>Pipa vagy x</td>
              </tr>
              <tr className='border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-bg-color1 dark:border-white/10 dark:hover:bg-neutral-600'>
                <td className='float-left whitespace-nowrap px-6 py-4 font-medium tracking-wider'>
                  <a href='#'>2021.02.15. - 2021.03.01.</a>
                </td>
                <td className='float-right whitespace-nowrap px-6 py-4 font-medium'>Pipa vagy x</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <a href='https://github.com/kir-dev/sprint-review-app' target='_blank' rel='noreferrer' />
    </div>
  );
}
