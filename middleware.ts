import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Ensure all requests are handled by the Next.js app router
export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files and api
     */
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
