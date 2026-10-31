import { compare } from "@/config/site";
import Icon from "./ui/Icon";
import SectionHead from "./ui/SectionHead";

function Mark({ ok }: { ok: boolean | null }) {
  if (ok === true)
    return (
      <span className="text-mint">
        <Icon name="check" size={18} strokeWidth={2.5} />
      </span>
    );
  if (ok === false) return <span className="font-bold text-[#ff6b6b]">✕</span>;
  return <span className="font-bold text-muted">?</span>;
}

export default function Compare() {
  return (
    <section className="py-20 sm:py-28">
      <div className="wrap">
        <SectionHead eyebrow={compare.eyebrow} title={compare.title} subtitle={compare.subtitle} />
        <div className="mx-auto max-w-[860px] overflow-x-auto rounded-[24px] border border-line">
          <table className="w-full min-w-[560px] border-collapse text-left text-[15px]">
            <thead>
              <tr>
                <th className="p-5 text-sm font-semibold text-muted">
                  <span className="sr-only">Ciri</span>
                </th>
                <th className="bg-accent/8 p-5 font-display text-lg text-accent">{compare.columns[0]}</th>
                <th className="p-5 font-display text-lg text-muted">{compare.columns[1]}</th>
              </tr>
            </thead>
            <tbody>
              {compare.rows.map((r) => (
                <tr key={r.feature} className="border-t border-line">
                  <td className="p-5 font-medium">{r.feature}</td>
                  <td className="bg-accent/8 p-5">
                    <span className="flex items-center gap-2.5">
                      <Mark ok={r.zedox.ok} />
                      {r.zedox.text}
                    </span>
                  </td>
                  <td className="p-5 text-muted">
                    <span className="flex items-center gap-2.5">
                      <Mark ok={r.other.ok} />
                      {r.other.text}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
