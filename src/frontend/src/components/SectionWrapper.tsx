import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  muted?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  innerClassName,
  muted = false,
  ...rest
}: SectionWrapperProps) {
  const [ref, visible] = useIntersectionObserver<HTMLElement>({
    threshold: 0.08,
  });

  return (
    <section
      id={id}
      ref={ref}
      {...rest}
      className={cn(
        "py-24 px-4 sm:px-6",
        muted ? "bg-muted/10" : "bg-background",
        className,
      )}
    >
      <div
        className={cn(
          "max-w-6xl mx-auto transition-all duration-700 ease-out",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
}

export function SectionHeading({
  label,
  title,
  titleHighlight,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 text-center">
      {label && (
        <span className="inline-block mb-3 text-xs font-mono font-semibold tracking-widest uppercase gradient-text opacity-80">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-5 mx-auto h-px w-24 bg-gradient-to-r from-violet-500/40 via-cyan-400/60 to-transparent" />
    </div>
  );
}
