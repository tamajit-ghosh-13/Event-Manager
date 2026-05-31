import { toNextJsHandler } from 'better-auth/next-js';
import { auth } from '@/lib/auth';

// Export Next.js API route handlers that delegate to Better Auth
export const { GET, POST } = toNextJsHandler(auth);
