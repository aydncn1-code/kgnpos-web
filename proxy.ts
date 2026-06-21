import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  if (request.headers.has('next-action')) {
    return new NextResponse(null, { status: 400 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon\\.ico).*)',
};
