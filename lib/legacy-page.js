import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

function safeSegments(slug) { return slug.every((part) => /^[a-z0-9][a-z0-9-]*$/i.test(part)); }
export async function readLegacyPage(slug = []) {
  if (!safeSegments(slug)) return null;
  try { return await readFile(join(process.cwd(), 'public', ...slug, 'index.html'), 'utf8'); }
  catch { return null; }
}
export function legacyDocument(html) {
  const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? '';
  const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? html;
  // Match link and style tags separately. Combining them with a lazy expression
  // truncates every <style> block at its opening tag, which drops Elementor's
  // page-specific inline CSS.
  const links = head.match(/<link\b[^>]*>/gi) ?? [];
  const inlineStyles = head.match(/<style\b[^>]*>[\s\S]*?<\/style>/gi) ?? [];
  const styles = [...links, ...inlineStyles].join('\n');
  return `${styles}<main class="legacy-page">${body.replace(/<script\b[\s\S]*?<\/script>/gi, '')}</main>`;
}
// Browsers normalize copied WordPress markup (for example `/>` becomes `>` on
// <link> tags) before React hydrates. The archive is deliberately opaque HTML,
// so React must not compare its serialized string with the normalized DOM.
export function LegacyMarkup({ html }) { return <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: legacyDocument(html) }} />; }
