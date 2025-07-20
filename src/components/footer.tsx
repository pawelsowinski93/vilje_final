import Link from "next/link";

const Box = ({
  children,
  middle,
  className,
  row,
}: {
  children: React.ReactNode;
  middle?: boolean;
  className?: string;
  row?: boolean;
}) => {
  return (
    <div
      className={`w-full bg-[#56471B] flex flex-col justify-center items-center grain min-h-[250px] h-full gap-6 md:p-0 p-8 ${
        middle
          ? "md:border-r md:border-t-0 md:border-b-0 border-t border-b  md:border-l border-white/30"
          : ""
      } ${
        row
          ? "md:flex-col flex-row justify-center md:items-center items-start"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-[#D2CBB6] w-full h-full flex md:flex-row flex-col justify-between items-center">
      <Box className="hidden md:flex">
        <p className="text-white z-10 font-the-impressionist text-2xl font-normal">
          linki
        </p>
        <div className="flex flex-col justify-center items-center flex-wrap gap-2 text-sm font-semibold">
          {[
            { href: "/instagram", label: "INSTAGRAM" },
            { href: "/email", label: "EMAIL" },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>
      </Box>
      <Box middle>
        <span className="text-5xl font-light font-square-peg">Vilje</span>
        <div>
          <p className="text-white z-10 font-the-impressionist text-xl font-normal">
            Psycholog & psychotraumatolog
          </p>
        </div>{" "}
        <p
          className="text-[#EFEADD] text-2xl font-medium tracking-tightest px-6 text-center"
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          KATARZYNA SOWIŃSKA
        </p>
      </Box>
      <Box row>
        <div className="md:hidden flex justify-center items-center flex-col gap-4">
          <p className="text-white z-10 font-the-impressionist text-2xl font-normal">
            linki
          </p>
          <div className="flex flex-col justify-center items-center flex-wrap gap-2 text-sm md:font-semibold font-normal">
            {[
              { href: "/instagram", label: "INSTAGRAM" },
              { href: "/email", label: "EMAIL" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center flex-col gap-4">
          <p className="text-white z-10 font-the-impressionist text-2xl font-normal">
            info
          </p>
          <div className="flex flex-col justify-center items-center flex-wrap gap-2 text-sm md:font-semibold font-normal">
            {[
              { href: "/o-mnie", label: "O MNIE" },
              { href: "/blog", label: "Blog" },
              { href: "/kontakt", label: "Kontakt" },
              { href: "/polityka-prywatnosci", label: "Polityka prywatności" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </Box>
    </footer>
  );
}
