import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Define domains
  const daiquiriDomain = 'daiquiri.dev';
  const isDaiquiri = hostname.includes(daiquiriDomain);

  // If it's daiquiri.dev and the path is root (/), rewrite to /daiquiri
  if (isDaiquiri && url.pathname === '/') {
    return NextResponse.rewrite(new URL('/daiquiri', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
