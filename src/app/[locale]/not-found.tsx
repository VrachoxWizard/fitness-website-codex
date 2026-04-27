import {getPath} from "@/lib/routes";

export default function NotFound() {
  return (
    <section className="section-dark min-h-[70vh] py-24">
      <div className="container-shell max-w-2xl">
        <p className="mono-label text-lab-blue">404</p>
        <h1 className="display-title mt-4 text-5xl">Stranica nije pronađena</h1>
        <p className="mt-5 leading-8 text-paper/70">
          Ova ruta ne postoji ili još nije objavljena.
        </p>
        <a
          href={getPath("hr", "home")}
          className="mt-8 inline-flex min-h-11 items-center rounded-md bg-blood px-5 font-bold text-paper-soft"
        >
          Povratak na početnu
        </a>
      </div>
    </section>
  );
}
