import React from "react";

export function HomeContent() {
  return (
    <div className="flex flex-col gap-14 w-full"> 

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
      <section className="grid sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
        <div className="card flex flex-col gap-3 hover:border-border transition-colors">
          <h3 className="text-accent">Poznajcie się.</h3>
          <p className="text-text-muted">
            Łączymy Cię z osobami o podobnych zainteresowaniach i stylu życia.
          </p>
        </div>

        <div className="card flex flex-col gap-3 hover:border-border transition-colors">
          <h3 className="text-accent">Poznajcie się LEPIEJ.</h3>
          <p className="text-text-muted">
            Moderowane profile i pełna kontrola nad prywatnością.
          </p>
        </div>
      </section>

    </div>
  );
}