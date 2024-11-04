'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function AdminOverview() {
  interface Task {
    id: number;
    name: string;
    date: string;
    project: string;
  }

  const [tasks, setTasks] = useState<Task[]>([]);
  const [sort, setSort] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    axios.get('/api/tasks').then((res) => {
      setTasks(res.data);
      setSort(res.data);
    });
  }, []);

  useEffect(() => {
    if (filter === 'name') {
      setSort([...tasks].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (filter === 'date') {
      setSort([...tasks].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
    } else if (filter === 'project') {
      setSort([...tasks].sort((a, b) => a.project.localeCompare(b.project)));
    } else {
      setSort(tasks);
    }
  }, [filter, tasks]);

  return (
    <div className='w-3/5 flex px-8 py-8 mx-auto lg:py-0'>
      <div className='p-6 space-y-4 md:space-y-6 sm:p-8 w-full'>
        <h1 className='text-xl font-bold leading-tight tracking-tight text-text-color-h1 md:text-4xl dark:text-bg-color2 w-full text-center'>
          Áttekintés
        </h1>
        <div>
          <select
            id='filter'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className='rounded bg-page-bg-color text-text-color dark:bg-bg-color2 border-2 border-slate-950'
          >
            <option value='' className='text-text-color  hover:bg-bg-color2 hover:text-text-color'>
              Rendezés
            </option>
            <option value='name' className='text-text-color hover:bg-bg-color2 hover:text-text-color'>
              Tagok szerint
            </option>
            <option value='tasks' className='text-text-color hover:bg-bg-color2 hover:text-text-color'>
              Projekt szerint
            </option>
            <option value='date' className='text-text-color hover:bg-bg-color2 hover:text-text-color'>
              Időszak szerint
            </option>
          </select>
        </div>
        <div>
          <table className='min-w-full max-w-lg text-center text-sm font-light text-surface dark:text-white'>
            <thead className='border-b border-neutral-200 font-medium dark:border-white/10 text-2xl'>
              <tr>
                <th className='text-text-color'>Név</th>
                <th className='text-text-color'>Időszak</th>
                <th className='text-text-color'>Projekt</th>
              </tr>
            </thead>
            <tbody>
              {sort.map((task) => (
                <tr key={task.id}>
                  <td>{task.name}</td>
                  <td>{task.date}</td>
                  <td>{task.project}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
