import { getSprints } from '../network/getSprints';
import { SprintEntity } from '../types/sprint.type';
import { Footer } from './Footer';
import Navbar from './Navbar';

export async function ReportingPeriod() {
  const sprints: SprintEntity[] = await getSprints();

  return (
    <div className='flex flex-col min-h-screen w-1/2'>
      <Navbar />
      <div className='text-center pt-8'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-text-color-h1 md:text-4xl dark:text-bg-color2'>
          Beszámolási időszakok
        </h1>
      </div>
      <div className='flex pt-32 items-center justify-center'>
        <div className='text-text-color items-center justify-center w-full'>
          <table className='min-w-full max-w-lg text-center text-sm font-light text-surface dark:text-white'>
            <thead className='border-b border-neutral-200 font-medium dark:border-white/10 text-2xl'>
              <tr>
                <th className='px-6 py-4'>Időszakok</th>
              </tr>
            </thead>
            <tbody>
              {sprints.map((sprint) => (
                <tr className='border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-bg-color1 dark:border-white/10 dark:hover:bg-neutral-600'>
                  <td className='float-left whitespace-nowrap px-6 py-4 font-medium tracking-wider'>
                    <a href='#'>
                      {sprint.startDate.toString()}-{sprint.endDate.toString()}
                    </a>
                  </td>
                  <td className='float-right whitespace-nowrap px-6 py-4 font-medium'>Pipa vagy x</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <a href='https://github.com/kir-dev/sprint-review-app' target='_blank' rel='noreferrer'>
        <Footer />
      </a>
    </div>
  );
}
