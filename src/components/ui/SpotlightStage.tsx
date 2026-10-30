// A dark set with one overhead light, a lit floor and a soft shadow.
// Children (the bottle, or a photo) sit centred on the floor.
export default function SpotlightStage({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative isolate overflow-hidden rounded-[32px] border border-line bg-deep ${className}`}>
      {/* light cone */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 mx-auto h-full w-[85%] animate-flicker bg-[linear-gradient(180deg,rgb(200_244_255/0.38),rgb(46_197_255/0.08)_60%,transparent_85%)] blur-xl [clip-path:polygon(43%_0,57%_0,100%_100%,0_100%)]"
      />
      {/* lamp */}
      <div aria-hidden className="absolute top-[-14px] left-1/2 -z-10 h-7 w-28 -translate-x-1/2 rounded-full bg-[#e9fbff] blur-md" />
      {/* lit floor */}
      <div aria-hidden className="absolute bottom-[4%] left-1/2 -z-10 h-[16%] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgb(46_197_255/0.35),transparent_70%)]" />
      {/* contact shadow */}
      <div aria-hidden className="absolute bottom-[10%] left-1/2 -z-10 h-5 w-[34%] -translate-x-1/2 rounded-[50%] bg-black/70 blur-md" />
      <div className="grid h-full place-items-end justify-center pb-[10%]">{children}</div>
    </div>
  );
}
