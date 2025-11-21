import React from "react";

export default function App() {
  return (
    <div className="app-shell">
      <div className="app-container flex flex-col gap-14">

        {/* HERO */}
        <section className="text-center flex flex-col items-center gap-6">
          <span className="pill">Nowe znajomości. Prawdziwe relacje.</span>

          <h1 className="text-4xl sm:text-5xl leading-tight">
            Odkrywaj ludzi,
            <br />
            <span className="text-accent">którzy pasują do Ciebie</span>
          </h1>

          <p className="text-text-muted max-w-xl">
            Aplikacja, która pomaga Ci poznawać nowych ludzi w naturalny sposób.
            Bez presji, bez niezręczności – tylko autentyczne rozmowy i wspólne
            zainteresowania.
          </p>

          <div className="flex gap-4 mt-4">
            <button className="primary-btn">Zacznij teraz</button>
            <button className="secondary-btn">Dowiedz się więcej</button>
          </div>
        </section>

        {/* SEKCJA FUNKCJI */}
        <section className="grid sm:grid-cols-3 gap-6">
          <div className="card flex flex-col gap-3 hover:border-border transition-colors">
            <h3 className="text-accent">Szybkie dopasowanie</h3>
            <p className="text-text-muted">
              Łączymy Cię z osobami o podobnych zainteresowaniach i stylu życia.
            </p>
          </div>

          <div className="card flex flex-col gap-3 hover:border-border transition-colors">
            <h3 className="text-accent">Bezpieczna przestrzeń</h3>
            <p className="text-text-muted">
              Moderowane profile i pełna kontrola nad prywatnością.
            </p>
          </div>

          <div className="card flex flex-col gap-3 hover:border-border transition-colors">
            <h3 className="text-accent">Prawdziwe rozmowy</h3>
            <p className="text-text-muted">
              Rozmowy startują od tematów, które Was łączą.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="card flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h2>Gotowy poznać kogoś nowego?</h2>
            <p className="text-text-muted">
              Załóż konto i rozpocznij swoją przygodę z nowymi relacjami.
            </p>
          </div>
          <button className="primary-btn text-base px-6 py-3">
            Utwórz konto
          </button>
        </section>

        {/* STOPKA */}
        <footer className="text-center text-xs text-text-muted pt-10 border-t border-border">
          © {new Date().getFullYear()} Gitownia — łączymy ludzi z duszą
        </footer>
      </div>
    </div>
  );
}
