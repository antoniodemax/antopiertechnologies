import { Menu } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { ctas, nav } from "@/content/site";
import { CtaLink } from "@/components/ui/cta-link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/cn";
import { Logo } from "./logo";

export function SiteHeader() {
  const { pathname } = useLocation();
  const scrolled = useScrolled();
  const raised = scrolled || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 h-header transition-[background-color,box-shadow,border-color] duration-300 motion-reduce:transition-none",
        "border-b bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/85",
        raised
          ? "border-border/80 shadow-nav after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[linear-gradient(90deg,transparent,rgb(30_98_163/0.35),transparent)]"
          : "border-white/60",
      )}
    >
      <div className="container-page flex h-full items-center justify-between gap-6">
        <Logo className="h-10 sm:h-12" />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    cn(
                      "relative inline-flex h-10 items-center rounded-control px-3.5 text-small font-medium transition-colors",
                      "after:absolute after:inset-x-3.5 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:transition-transform after:duration-300 motion-reduce:after:transition-none",
                      "after:bg-brand",
                      isActive
                        ? "text-ink after:scale-x-100"
                        : "text-ink-muted hover:text-ink hover:after:scale-x-50",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <CtaLink cta={ctas.consultation} size="sm" className="hidden sm:inline-flex" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="grid size-11 place-items-center rounded-control text-ink transition-colors hover:bg-surface-muted lg:hidden">
        <Menu className="size-6" aria-hidden />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent title="Menu">
        <div className="flex h-header items-center border-b border-border px-6">
          <Logo className="h-9" />
        </div>
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={close}
                  className={({ isActive }) =>
                    cn(
                      "flex min-h-14 items-center justify-between rounded-control px-3 text-lg font-medium transition-colors",
                      isActive
                        ? "bg-brand-subtle text-brand-deep"
                        : "text-ink hover:bg-surface-muted",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive ? (
                        <span aria-hidden className="size-1.5 rounded-full bg-brand" />
                      ) : null}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-3 border-t border-border p-6">
          <CtaLink cta={ctas.consultation} size="lg" onClick={close} />
          <CtaLink cta={ctas.discovery} variant="secondary" size="lg" onClick={close} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
