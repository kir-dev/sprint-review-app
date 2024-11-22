'use client';

import { useEffect, useState } from 'react';

export function ReportingPeriod() {
  interface Week {
    start: string;
    end: string;
    numberOfTheWeek: number;
    completed?: boolean;
  }

  const [weeks, setWeeks] = useState<Week[]>([]);

  useEffect(() => {
    const generateWeeks = (startDate: Date, weeksCounter: number): Week[] => {
      const weeks: Week[] = [];
      const current = new Date(startDate);

      for (let i = 0; i < weeksCounter; ++i) {
        const start = new Date(current);
        start.setDate(current.getDate() - current.getDay() + 1);
        const end = new Date(start);
        end.setDate(start.getDate() + 6);

        weeks.push({
          start: start.toLocaleDateString(),
          end: end.toLocaleDateString(),
          numberOfTheWeek: i + 1,
        });

        current.setDate(current.getDate() + 7);
      }

      return weeks;
    };

    const startDate = new Date('2024-09-02'); //Itt át lehet állítani félévenként esetleg vagy valami okosabb megoldást kitalálni.
    const generatedWeeks = generateWeeks(startDate, 14);
    setWeeks(generatedWeeks);
  }, []);

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
              {weeks.map((week) => (
                <tr
                  key={`${week.start}-${week.end}`}
                  className='border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-bg-color1 dark:border-white/10 dark:hover:bg-neutral-600'
                >
                  <a
                    href={`/singleperiod?numberOfTheWeek=${encodeURIComponent(week.numberOfTheWeek)}&start=${encodeURIComponent(week.start)}&end=${encodeURIComponent(week.end)}`}
                  >
                    <td className='float-left whitespace-nowrap px-6 py-4 font-medium tracking-wider'>
                      {week.numberOfTheWeek}. hét ({week.start} - {week.end})
                    </td>
                  </a>
                  <td className='float-right whitespace-nowrap px-6 py-4 font-medium'>Pipa vagy x</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
