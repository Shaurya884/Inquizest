import { LogoMark } from "./LogoMark";

export function FinalSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-ink px-[6vw] py-[10vh]" aria-label="Register">
      <div className="halftone pointer-events-none absolute inset-0 text-paper opacity-[0.06]" />
      <div className="relative">
        <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-paper/45">end of transmission</p>
        <h2 className="mt-[3vh] max-w-[18ch] font-display text-[11vw] leading-[0.86] tracking-[-0.02em] text-paper md:text-[6vw]">
          ENTER THE UNIVERSE
        </h2>
        <a
          href="#"
          className="mt-[5vh] inline-flex items-center gap-4 bg-paper px-7 py-3 font-mono text-[11px] uppercase tracking-[0.4em] text-ink transition-transform hover:-translate-y-0.5"
        >
          Register now <span aria-hidden>→</span>
        </a>
      </div>
      <div className="relative mt-[10vh] flex flex-wrap items-end justify-between gap-[4vh]">
        <LogoMark tone="color" className="w-[min(46vw,520px)]" />
        <p className="font-mono text-[10px] uppercase leading-loose tracking-[0.32em] text-paper/40">
          inquizest 3.0 · placeholder dates
          <br />
          placeholder venue · placeholder contact
        </p>
      </div>
    </section>
  );
}
