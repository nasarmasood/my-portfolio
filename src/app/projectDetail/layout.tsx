import React, { Suspense } from 'react';

// You can optionally define a loading component (e.g., a simple spinner)
const Loading = () => <div>Loading...</div>;

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Wrap the children in a Suspense boundary
    <Suspense fallback={<Loading />}>
      <div>{children}</div>
    </Suspense>
  );
}

export default Layout;