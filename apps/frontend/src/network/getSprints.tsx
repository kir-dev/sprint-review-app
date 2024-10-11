import { SprintEntity } from '../types/sprint.type';

export async function getSprints(): Promise<SprintEntity[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sprint`);
    const data: SprintEntity[] = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
}
