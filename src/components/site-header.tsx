import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="mx-auto flex h-20 max-w-6xl items-center px-4">
        <Link href="/" aria-label={`${siteConfig.name} — início`}>
          <Image
            src="/logo.png"
            alt={siteConfig.name}
            width={2073}
            height={225}
            priority
            className="h-6 w-auto sm:h-7"
          />
        </Link>
      </div>
    </header>
  );
}
