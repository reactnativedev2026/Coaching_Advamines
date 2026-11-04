import './globals.css';

export const metadata = { title: 'NoMoreClass | IIT-JEE, NEET & KCET Coaching', description: 'Coaching programmes for JEE, NEET, KCET and Foundation.' };
// Browser extensions can add attributes (for example `cz-shortcut-listen`) before
// React hydrates. This app intentionally renders archived third-party markup, so
// do not surface a development overlay for those extension-only body changes.
export default function RootLayout({ children }) { return <html lang="en"><body suppressHydrationWarning>{children}</body></html>; }
