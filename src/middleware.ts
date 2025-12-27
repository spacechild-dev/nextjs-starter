import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  const pathname = url.pathname;

  const daiquiriDomain = 'daiquiri.dev';
  const mainDomain = 'dagkanbayramoglu.com';
  const trDomain = 'dagkanbayramoglu.com.tr';

  const isDaiquiriRoute = pathname.startsWith('/projects') || 
                          pathname.startsWith('/privacy-policy') || 
                          pathname.startsWith('/terms');

  // Logic for daiquiri.dev
  if (hostname.includes(daiquiriDomain)) {
    if (!isDaiquiriRoute && pathname !== '/') {
      url.hostname = mainDomain;
      return NextResponse.redirect(url);
    }
  } 
  // Logic for main domains
  else if (hostname.includes(mainDomain) || hostname.includes(trDomain)) {
    if (isDaiquiriRoute) {
      url.hostname = daiquiriDomain;
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
