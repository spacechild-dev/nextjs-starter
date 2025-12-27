import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Domain detection logic is moved to client-side components (Providers, Header)
  // for theme and content adaptation. No rewrites needed as we want to maintain
  // the same URL structure across domains.
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};