import { bookingNote } from "@/config/site";

export default function BookingNote({ className = "" }: { className?: string }) {
  return (
    <p className={`flex gap-2 text-xs leading-relaxed !text-fg-3 ${className}`}>
      <i className="fa-solid fa-circle-info mt-0.5" aria-hidden />
      <span>{bookingNote}</span>
    </p>
  );
}
