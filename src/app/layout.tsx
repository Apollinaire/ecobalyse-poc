'use client';

import { QueryClient } from '@tanstack/react-query';
import '@/globals.css';
import QueryClientProvider from '@/components/QueryClientProvider';

const queryClient = new QueryClient({});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
