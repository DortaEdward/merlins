import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white border-b border-gray-200">
        <MaxWidthWrapper>
          <div className="flex h-16 items-center">
            <div className="ml-4 flex lg:ml-0">
              <Link href="/" className="flex items-center font-bold">
                <Image src="/logo.png" width={48} height={48} alt="Website Logo" className="rounded-md" />
                <p className="text-lg">Merlins</p>
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}