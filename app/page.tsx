import {button as buttonStyles} from "@heroui/theme";
import {subtitle, title} from "@/components/primitives";
import NextLink from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center leading-[3]">
        <h1 className={title()}>Staking UI</h1>
        <br/>
        <h1 className={title({color: "violet"})}> for Starknet</h1>
        <br/>
        <h2 className={subtitle({class: "mt-4"})}>
          Modern Staking UI on starknet
        </h2>
      </div>

      <div className="flex gap-3 max-w-md">
        <NextLink
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={"/stake"}
        >
          Stake
        </NextLink>
      </div>
    </section>
  );
}
