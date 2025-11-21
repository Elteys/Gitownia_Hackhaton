import React from "react";

export default function Home() {
  return (
    <div className="app-shell">
      <div className="app-container flex flex-col gap-14">

        {/* HERO */}
        <section className="text-center flex flex-col items-center gap-6">

          <h1 className="text-4xl sm:text-5xl leading-tight">
            Poznajcie się,
            <br />
            <span className="text-accent">przełamcie pierwsze lody.</span>
          </h1>

          <p className="text-text-muted max-w-xl">
            Aplikacja, która pomaga Wam poznawać się nawzajem w naturalny sposób.<br></br>
            TU RESZTA OPISU BLA BLA BLA.
          </p>
        </section>

        {/* SEKCJA FUNKCJI */}
        <section className="grid sm:grid-cols-2 gap-6">
          <div className="card flex flex-col gap-3 hover:border-border transition-colors">
            <h3 className="text-accent">Poznajcie się.</h3>
            <p className="text-text-muted">
              Łączymy Cię z osobami o podobnych zainteresowaniach i stylu życia. TO DO ZMIANY.
            </p>
          </div>

          <div className="card flex flex-col gap-3 hover:border-border transition-colors">
            <h3 className="text-accent">Poznajcie się LEPIEJ.</h3>
            <p className="text-text-muted">
              Moderowane profile i pełna kontrola nad prywatnością. TO DO ZMIANY.
            </p>
          </div>
        </section>

        {/* STOPKA */}
        <footer className="text-center text-xs text-text-muted pt-10 border-t border-border">
          © {new Date().getFullYear()} Gitownia — łączymy ludzi z duszą
        </footer>
      </div>
    </div>
  );
}
