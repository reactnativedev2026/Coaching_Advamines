import { redirect } from 'next/navigation';
// Serve the archived document itself. Rendering WordPress HTML inside React makes
// browsers normalize markup and breaks both its CSS and hydration.
export default function Home() { redirect('/index.html'); }
