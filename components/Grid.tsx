// import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {
          [
            {title: "Web Development", description: "I build websites and web applications using modern technologies and frameworks.",id:1},
          ].map((item,i) => (
						<BentoGridItem
							id={item.id}
							key={i}
							title={item.title}
							description={item.description}
						/>

          ))
        }
      </BentoGrid>
    </section>
  );
};