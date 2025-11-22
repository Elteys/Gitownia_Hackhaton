import React from "react";
import { useNavigate } from 'react-router-dom';

export function HomeContent() {
  const navigate = useNavigate();

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget luctus elit. Curabitur volutpat lacus felis, ut rutrum ligula porttitor vitae.<br />
        </p>
      </section>

      {/* SEKCJA FUNKCJI */}
      <section className="grid sm:grid-cols-2 gap-6 w-full px-6">
        <div
          onClick={() => navigate('/categories1')}
          className="card flex flex-col gap-3 p-8 border rounded-lg shadow-lg hover:border-border transition-colors w-full cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && navigate('/categories1')}
        >
          <h3 className="text-accent text-xl sm:text-2xl">Poznajcie się.</h3>
          <p className="text-text-muted text-lg">
            Łączymy Cię z osobami o podobnych zainteresowaniach i stylu życia.
          </p>
        </div>

        <div
          onClick={() => navigate('/categories2')}
          className="card flex flex-col gap-3 p-8 border rounded-lg shadow-lg hover:border-border transition-colors w-full cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && navigate('/categories2')}
        >
          <h3 className="text-accent text-xl sm:text-2xl">Poznajcie się LEPIEJ.</h3>
          <p className="text-text-muted text-lg">
            Moderowane profile i pełna kontrola nad prywatnością.
          </p>
        </div>
      </section>
    </div>
  );
}
