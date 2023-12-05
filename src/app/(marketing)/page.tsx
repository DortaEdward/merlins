//import { api } from "@/trpc/server";
import { SignInButton } from "@clerk/nextjs";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";

export default async function Home() {
  return (
    <MaxWidthWrapper>
      <div className="my-36"></div>
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 py-20 text-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            The last <span className="text-red-500">note taking</span> app you
            will ever need.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-gray-500">
            Welcome to Merlins, a user driven note taking application designed
            to help you in your studies.
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <div className="rounded bg-red-500 px-6 py-2 text-lg font-semibold text-white">
            <SignInButton>Get Started!</SignInButton>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
