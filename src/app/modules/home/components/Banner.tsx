import TattooMachineIcon from "@/app/shared/icons/TattooMachineIcon";
import Link from "next/link";

export default function Banner(){
    return(
       <section className="w-full flex flex-col items-center justify-center">
            <div className="w-[90%] md:w-[35%] flex flex-col items-center justify-center my-[4em]">
                <h2 className="text-4xl mb-4">Otimize seu estúdio de Tatuagem</h2>
                <p className="text-center">Gerencie agendamentos, acompanhe dados dos clientes e impulsione seu negócio de tatuagem e piercing com nosso aplicativo especializado de agenda.</p>
                <a href="" className="bg-secondary py-2 px-4 rounded-lg mt-4 hover:bg-white hover:text-secondary hover:border-2 hover:border-secondary"><button>Agendar demonstração</button></a>
            </div>
       </section>
    )
}