import type { Metadata } from "next";
import { SplineSceneBasic } from "@/components/ui/demo";

export const metadata: Metadata = {
  title: "Spline demo",
  robots: { index: false, follow: false },
};

export default function SplineDemo() {
  return (
    <main className="wrap py-16">
      <SplineSceneBasic />
    </main>
  );
}
