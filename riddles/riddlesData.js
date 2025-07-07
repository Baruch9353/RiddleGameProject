const url = 'http://localhost:3000/riddles';

export async function loadRiddles() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error loading riddles:', error);
    return [];
  }
}


