export default function SectionHeading({ eyebrow, title, align = "center" }) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col mb-10 sm:mb-14 ${alignment}`}>
      <p className="text-cyan-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-5xl font-bold text-white">{title}</h2>
    </div>
  );
}
