import { faqs } from "@/config/site";

// Act 6, reassurance. Administrative content, kept short.
export default function Questions() {
  return (
    <section id="faq" data-sc-act="flow" className="sc-section zx-faq">
      <div className="sc-wrap zx-faq__grid">
        <h2 className="sc-display zx-h2" data-sc-in>
          {faqs.title}
        </h2>
        <div className="zx-faq__list" data-sc-in data-sc-stagger="50">
          {faqs.items.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
