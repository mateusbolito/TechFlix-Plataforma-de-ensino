import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Language {
  name: string;
  image: StaticImageData;
  route: string;
}

interface CardHomeProps {
  languages: Language[];
}

const CardHome: FC<CardHomeProps> = ({ languages }) => {
  return (
    <section className="flex items-center justify-center gap-3 p-7 w-full cursor-pointer">
      <div className="w-[800px] flex items-center justify-center flex-wrap max-w-full gap-5">
        {languages.map((language, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-colorsecondary"
          >
            <Link href={language.route}>
              <div className="w-[200px] h-[150px] bg-transparent border border-zinc-800 hover:border-roseColor rounded-lg ">
                <h1 className="text-center text-white pt-2">{language.name}</h1>
                <div className="flex items-center justify-center ">
                  <Image
                    src={language.image.src}
                    alt={language.name}
                    width={100}
                    height={100}
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardHome;
