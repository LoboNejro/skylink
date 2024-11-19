import { ClerkProvider, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className="h-screen">
      <ClerkProvider afterSignOutUrl="/">
        <UserButton />
      </ClerkProvider>
    </div>
  );
}
