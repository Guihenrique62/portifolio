import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import Image from "next/image";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-7xl"
              data-aos="fade-up"
            >
              Portto
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Seu negócio não precisa só de um site — precisa de uma solução digital que gera resultados reais.
              </p>
            </div>
          </div>

          {/* Hero image */}
          <figure className="relative overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-900 before:via-indigo-500/20 before:to-gray-900 mb-8">
            <Image
              className="opacity-50 grayscale"
              src={VideoThumb}
              width={1104}
              height={576}
              priority
              alt="worker tecgnology"
            />
          </figure>

          <div className="pb-12 text-center md:pb-20">
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}>
                Na Portto, entregamos mais que sites — criamos soluções digitais pensadas para gerar crescimento, autoridade e resultados concretos. De sistemas sob medida a automações inteligentes, tudo é feito para escalar seu negócio e maximizar seu retorno.
                Não é gasto. É investimento no seu futuro digital.              </p>
            </div>

            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">

              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="#0"
                >
                  <span className="relative inline-flex items-center">
                    Comece agora
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </a>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
