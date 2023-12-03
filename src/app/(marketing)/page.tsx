
//import { api } from "@/trpc/server";
import Link from "next/link";
import MaxWidthWrapper from "../_components/MaxWidthWrapper";
import { SignInButton } from "@clerk/nextjs";

export default async function Home() {
  //const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">The last <span className="text-red-500">note taking</span> app you will ever need.</h1>
        <p className="mt-6 text-lg max-w-prose text-gray-500">Welcome to Merlins. A user driven note taking application designed to help you in your studies.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <div className="bg-red-500 px-6 py-2 text-lg font-semibold text-white rounded">
            <SignInButton>
              Get Started Now!
            </SignInButton>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
