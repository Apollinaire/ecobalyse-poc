'use client';
import useTextileProducts from '@/api/textile-materials';

export default function Home() {
  const { isLoading, error, data } = useTextileProducts();
  if (isLoading) {
    return <span>loading</span>;
  }
  if (error) {
    console.log(error);
    return <span>error</span>;
  }

  return (
    <main>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </main>
  );
}
