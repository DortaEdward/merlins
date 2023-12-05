
//import { api } from "@/trpc/server";
import { SignInButton } from "@clerk/nextjs";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";

export default async function Home() {
  return (
    <MaxWidthWrapper >
      <div className="my-48"></div>
      <div className="py-20 mx-auto text-center flex flex-col items-center justify-center gap-4 max-w-3xl">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">The last <span className="text-red-500">note taking</span> app you will ever need.</h1>
          <p className="mt-6 text-lg max-w-prose text-gray-500">Welcome to Merlins, a user driven note taking application designed to help you in your studies.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <div className="bg-red-500 px-6 py-2 text-lg font-semibold text-white rounded">
            <SignInButton>
              Get Started!
            </SignInButton>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
