import { comparison } from "@/config/site";
import Reveal from "./ui/Reveal";
import SectionHeader from "./ui/SectionHeader";

const ours = "border-x-2 border-cyan/25 bg-cyan/3";

export default function Comparison() {
  return (
    <section id="comparison" className="relative scroll-mt-20 py-16 md:py-24">
      <div className="container-page">
        <SectionHeader {...comparison} accent="cyan" />
        <Reveal className="overflow-x-auto rounded-[20px] border border-line">
          <table className="w-full min-w-[800px] border-collapse bg-card text-left">
            <thead>
              <tr>
                <th className="border-b border-line bg-white/2 p-6 font-heading text-white">Feature Checklist</th>
                {comparison.columns.map((col, i) => (
                  <th key={col} className={`border-b border-line p-6 font-heading ${i === 0 ? `${ours} !bg-cyan/7 text-cyan` : "bg-white/2 text-white"}`}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.feature} className="[&:last-child>td]:border-b-0">
                  <td className="border-b border-line p-6 font-semibold text-white">{row.feature}</td>
                  {row.cells.map((cell, i) => (
                    <td key={i} className={`border-b border-line p-6 text-fg-2 ${i === 0 ? ours : ""}`}>
                      {cell.mark && (
                        <i
                          className={`fa-solid ${cell.mark === "check" ? "fa-check text-ok" : "fa-xmark text-bad"} mr-1.5 text-lg`}
                          aria-label={cell.mark === "check" ? "Yes" : "No"}
                        />
                      )}
                      <span className={cell.strong ? "font-semibold text-white" : ""}>{cell.text}</span>
                      {cell.tag && (
                        <span className="ml-2 rounded bg-cyan px-2 py-0.5 text-[0.7rem] font-bold text-ink-deep">{cell.tag}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
