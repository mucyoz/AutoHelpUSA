import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Statistics from "@/components/Statistics";
import CTAButton from "@/components/CTAButton";

const WhyUs = () => {
  return (
    <section className="py-20 px-4 bg-background" id="why-us">
      <div className="flex items-center justify-center">
        <SectionHeader title="Why Us?" />
      </div>

      <h2 className="mt-10 text-foreground font-lora text-6xl max-xl:text-5xl max-md:text-4xl text-center leading-[64px] font-bold">
        Why Newcomers Trust Us
      </h2>

      <div className="mt-20 flex max-lg:flex-col items-center justify-center gap-8">
        <div className="w-96 max-lg:w-full max-lg:mx-auto py-10 px-9 rounded-large bg-secondaryBackground border-light border-card drop-shadow-card  text-foreground">
          <Image
            src={"/icons/language.svg"}
            alt="AutoHelpUS speaks your language"
            width={54}
            height={54}
          />
          <h2 className="mt-60 max-lg:mt-28 max-md:mt-16 font-lora font-bold text-[32px] leading-10">
            We Speak Your Language
          </h2>
          <p className="mt-6 font-inter font-medium text-lg leading-8">
            Car buying is complicated enough—language barriers shouldn&rsquo;t
            make it harder. Our multilingual team offers support in various
            languages as needed.
          </p>
        </div>

        <div
          className="max-lg:w-full relative bg-foreground
        border border-secondary rounded-large drop-shadow-statistics py-11 px-10
        "
        >
          <div className="absolute top-0 left-0 h-full w-full bg-[url(/backgrounds/bg-dots.webp)] bg-center bg-no-repeat bg-cover  rounded-large" />

          <div className="relative z-10">
            <Image
              src={"/icons/chart.svg"}
              alt="Real successes"
              width={56}
              height={56}
              loading="lazy"
            />

            <h2 className="mt-14 font-lora font-bold text-[32px] text-white leading-10">
              Real Success <br /> for Newcomers Like You
            </h2>

            <div className="mt-10 grid grid-cols-2 max-md:grid-cols-1 gap-6 ">
              <Statistics
                title="3,000+"
                description="Newcomers helped buy their first U.S. car"
                key={1}
              />
              <Statistics
                title="$4,200+"
                description="Average savings per client"
                key={2}
              />
              <Statistics
                title="92%"
                description="Loan approval rate(even with limited U.S credit history)"
                key={3}
              />
              <Statistics
                title="15+"
                description="Languages spoken for clear, personalized guidance"
                key={4}
              />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-24 text-center font-lora font-bold text-[40px] max-md:text-2xl leading-[56px] text-foreground">
        Get expert help today—book your <br /> FREE consultation!
      </p>

      <div className="mt-12 flex items-center justify-center">
        <CTAButton label="Talk to an Advisor Now." />
      </div>
    </section>
  );
};

export default WhyUs;
