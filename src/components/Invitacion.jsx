import AOS from "aos";
import "aos/dist/aos.css";

import MusicScreen from "./MusicScreen";
import Countdown from "./Countdown";
import GoogleCalendarButton from "./GoogleCalendarButton";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import { FocusCardsDemo } from "./FocusCardsDemo";
import pies from "../assets/angelito/pies.svg";
import PadresPadrinos from "./PadresPadrinos";
import CeremoniaBautismo from "./CeremoniaBautismo";
import principitoestrellas from "../assets/principito-estrellas.svg";
import song from "../assets/song.mp3"

const Invitacion = () => {

  const targetDate = new Date("2025-10-12T18:00:00-03:00");


  return (
    <div className="w-full font-eleganteText relative overflow-hidden bg-[#f8f5f0]">

        <div className="absolute z-40">
          <MusicScreen cancion={song} />
        </div>

      <div className="relative flex flex-col justify-center md:justify-start items-center min-h-screen w-full text-center bg-fondo-angelito-mobile md:bg-fondo-angelito bg-center bg-cover font-eleganteText space-y-5 overflow-hidden">
        <div
          data-aos="fade-in"
          className="w-full flex flex-col items-center justify-center bg-center bg-cover px-4 h-screen"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dfschbyq2/image/upload/v1742417091/Copia_de_Beige_Simple_Abstract_Aesthetic_Desktop_Wallpaper_Video_para_celular_1_fsrcpy.png')`,
          }}
        >
          <div className="hidden md:block absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dfschbyq2/image/upload/v1742416496/Copia_de_Beige_Simple_Abstract_Aesthetic_Desktop_Wallpaper_2_nc38q0.png')`,
            }}
          ></div>
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="md:mt-36">
              <h3 className="text-xl tracking-widest text-[#63412a]">
                Mi primer año
              </h3>
              <h2 className="text-7xl md:text-[6rem]  mb-5  text-[#63412a] z-10">
                Massimo
              </h2>
            </div>
            <img
              src="https://res.cloudinary.com/dfschbyq2/image/upload/v1759588720/047f42eb-e0fe-40a3-ac46-ad8c72754e86_adybhu.jpg"
              alt=""
              className="w-[30rem] p-5 border-2 border-dashed border-[#97572B]"
            />

            <div className="flex items-center justify-center py-2 px-4 mt-5">
              <p className="font-bold text-[#63412a] text-2xl tracking-widest">
                1 2 . 1 0 . 2 0 2 5
              </p>
            </div>
          </div>
        </div>
      </div>

        <section className="bg-white text-center py-10 px-6">
          <h2 className="text-3xl md:text-3xl font-semibold text-[#63412a] mb-4">
            Nuestro pequeño principito cumple su primer año
          </h2>
          <blockquote className="italic text-gray-600 max-w-2xl mx-auto mb-6 text-lg">
            “Todas las personas grandes fueron primero niños. (Aunque pocas lo recuerdan)” <br /> — El Principito
          </blockquote>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Hace un año, una estrella más brilló en nuestro cielo...<br/>
            Massimo llegó para llenar nuestras vidas de amor, ternura y aventuras.<br/>
            Ahora queremos celebrar su primer viaje alrededor del sol con vos 🥰✨
          </p>
        </section>

      <div>
        <section
          id="contador"
          className="bg-[#63412a] w-full flex flex-col items-center justify-center gap-y-5 py-10 font-thin"
        >
          <Countdown
            targetDate={targetDate}
            containerClasses={
              "w-full flex flex-col justify-center items-center gap-y-5 text-white"
            }
          />
        </section>

        <PadresPadrinos
          padres="María y Diego"
          padrinos=""
          textColor="text-gray-700"
          bgColor="bg-white"
          containerClasses="pt-10"
        />

        <section id="lugares" className="relative text-center bg-white">
          <CeremoniaBautismo
            imagen="https://res.cloudinary.com/dfschbyq2/image/upload/v1742506877/Disen%CC%83o_sin_ti%CC%81tulo_8_msysfn.png"
            iglesia="Salón de Eventos Forever"
            hora_iglesia="18:00hs"
            color="[#63412a]"
          />
          <a href="https://maps.app.goo.gl/uhoZTt2yw7yhL6618?g_st=ipc" target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-[#63412a] my-5 py-3 px-8 rounded-full text-[#63412a] font-semibold hover:text-gray-600 transition">
              CÓMO LLEGAR
            </button>
          </a>
        </section>

        <div className="relative bg-white">
          <img
            src={pies}
            alt="Decoración lateral"
            className="hidden md:block absolute top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{
              width: "10rem",
              left: 20,
            }}
          />
          <img
            src={pies}
            alt="Decoración lateral"
            className="hidden md:block absolute  top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{
              width: "10rem",
              right: 20,
            }}
          />
          <section className="pb-16">
              <FocusCardsDemo
                texto=""
                images={[
                  {
                    index: 1,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759588682/8d5b84de-1d9c-48e5-99f1-b683eb3a0f3d_vbknew.jpg",
                  },
                  {
                    index: 2,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759588684/e73be366-ea26-413c-a8ab-2cafb2e37059_uxopcb.jpg",
                  },
                  {
                    index: 3,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759588709/bccc473c-dd36-48b0-99a3-7871901e087f_gtomxq.jpg",
                  },
                  {
                    index: 4,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759588714/74df4215-3050-4bf3-9959-890be4ffc525_cjgbuo.jpg",
                  },
                ]}
              />
          </section>
        </div>

        <div className="bg-blue-200 text-center relative text-[#63412a]">
          <GoogleCalendarButton
            imgClass="text-[#63412a]"
            buttonClass="border-[#4b5147] rounded-full"
            titleCalendar="Cumpleaños de Massimo"
            salon="Salon de Eventos Forever Jacaranda, Libertador Gral San Martín, Jujuy"
            fechaComienzo="20251012T180000"
            fechaFin="20251012T213000"
          />
        </div>

        <section
          className="flex flex-col justify-center items-center bg-white pt-20"
        >
          <img
            src={principitoestrellas}
            alt=""
            className="size-56"
            data-aos="fade-up"
          />
          <Asistencia
            clase="w-full pb-10 bg-white bg-fixed border-b-2 border-[#4b5147]"
            claseTitle="text-[#63412a]"
            claseButton="border-2 border-[#63412a] font-semibold hover:bg-[#4b5147]  text-[#63412a] hover:text-white rounded-full"
            linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLScnTnc8MoBTh6hQoVHFJq7whl4BaZBDzd8HUrWjIUPUVcrxIQ/viewform?usp=header"
          />
        </section>

        <section className="bg-white text-center py-10 px-6">
          <blockquote className="italic text-gray-600 max-w-2xl mx-auto mb-4 text-lg">
            “Lo esencial es invisible a los ojos, pero tu presencia será visible en nuestro corazón.”
          </blockquote>
          <p className="text-lg text-gray-700 font-semibold max-w-2xl mx-auto leading-relaxed">
            ¡Te esperamos para compartir esta aventura estelar con Massimo!
          </p>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
