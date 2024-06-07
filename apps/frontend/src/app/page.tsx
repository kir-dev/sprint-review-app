import { SprintLogin } from '../components/SprintLogin';
import { WorkSelector } from '../components/WorkSelector';

export default function Home() {
  return (
    <main className='flex items-center justify-center bg-page-bg-color'>
      <SprintLogin />
      <WorkSelector />
    </main>
  );
}
