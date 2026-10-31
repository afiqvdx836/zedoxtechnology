import { inside } from "@/config/site";

// Act 2, curiosity. Authored silence before the clip: type on empty ground.
export default function Inside() {
  return (
    <section data-sc-act="flow" className="sc-section zx-inside">
      <div className="sc-wrap">
        <div className="zx-inside__col" data-sc-in data-sc-stagger="70">
          <h2 className="sc-display zx-h2">{inside.title}</h2>
          {inside.body.map((p) => (
            <p key={p} className="zx-body">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
