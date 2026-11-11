import Link from 'next/link';
import { centres } from '@/lib/content';

export const metadata = {
  title: 'Our Centres | NoMoreClass',
  description: 'Our coaching centres across North Bengaluru: Hebbal / Sahakara Nagar, Yelahanka, Vidyaranyapura, and Chikkabanavara.',
};

export default function CentresPage() {
  const uniqueCentres = centres.filter((c, idx, arr) => arr.findIndex(x => x.name === c.name) === idx);
  return (
    <main className="page detail">
      <p className="eyebrow">Find a Centre</p>
      <h1>Our Centres</h1>
      <p className="lead">Four campuses across North Bengaluru. One consistent teaching standard led by IITians and experienced mentors.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', margin: '32px 0' }}>
        {uniqueCentres.map((c) => (
          <div key={c.slug} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', background: '#fff' }}>
            <h2 style={{ fontSize: '1.25rem', marginTop: 0 }}>{c.name}</h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>{c.address}</p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
              <Link className="button" href={`/centers/${c.slug === 'hebbal' ? 'hebbal-sahakaranagar' : c.slug}/`} style={{ fontSize: '0.875rem' }}>
                Centre details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Link className="button" href="/contact/">Book a visit</Link>
    </main>
  );
}

