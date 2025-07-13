import Link from "next/link";

const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full bg-[#56471B] flex flex-col justify-center items-center grain p-10 min-h-[300px] h-full gap-4">
      {children}
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-[#D2CBB6] w-full h-full flex flex-row justify-between items-center gap-1">
      <Box>
        <div>Linki</div>
        <Link href="/">INSTAGRAM</Link>
        <Link href="/">EMAIL</Link>
      </Box>
      <Box>
        <div>Vilje</div>
        <div>
          {["psycholog", "psychotraumatolog"].map((item) => (
            <Link key={item} href="/">
              {item}
            </Link>
          ))}
        </div>
        <div>KATARZYNA SOWIŃSKA</div>
      </Box>
      <Box>
        <div>Info</div>
        <Link href="/">O MNIE</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Kontaks</Link>
        <Link href="/">Polityka prywatności</Link>
      </Box>
    </footer>
  );
}
