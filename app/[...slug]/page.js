import { access } from 'node:fs/promises';
import { join } from 'node:path';
import { notFound, redirect } from 'next/navigation';
export default async function ArchivedPage({ params }) {
  const { slug } = await params;
  if (!slug.every((part) => /^[a-z0-9][a-z0-9-]*$/i.test(part))) notFound();
  try { await access(join(process.cwd(), 'public', ...slug, 'index.html')); } catch { notFound(); }
  redirect(`/${slug.join('/')}/index.html`);
}
