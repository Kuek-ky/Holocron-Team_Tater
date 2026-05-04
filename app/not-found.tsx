import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-24 text-center md:py-32">
        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
          / 404
        </span>
        <h1 className="mt-3 text-balance font-display text-5xl font-semibold tracking-tight md:text-7xl">
          These aren&apos;t the
          <br />
          <span className="text-primary">droids</span>&nbsp;you&apos;re looking for.
        </h1>
        <p className="mt-6 max-w-md text-pretty text-muted-foreground">
          The dossier you requested isn&apos;t in the archive. Try heading back
          to the catalog.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:brightness-110"
        >
          Return home
        </Link>
      </main>
      <SiteFooter />
    </>
  )
}