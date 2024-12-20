import Banner from "@/app/modules/home/components/Banner";
import HomeHeader from "@/app/modules/home/components/HomeHeader";
import Card from '../../modules/home/components/Card';
import PriceCard from "@/app/modules/home/components/PricesCard";
import { BarChart, Calendar, Clock, Star, Syringe, User, Zap } from "lucide-react";
import HomeFooter from "@/app/modules/home/components/HomeFooter";

export default function HomePage(){
    return(
        <>
            <HomeHeader/>
            <main>
                <Banner/>
                <section className="w-full flex flex-col items-center justify-center bg-white text-black py-[4em]">
                    <div className="w-[90%] flex flex-col items-center justify-center">
                        <h2 className="text-[1.6em] mb-[2em]">Principais Recursos</h2>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                            <Card
                                title="Agendamento Inteligente"
                                description="Gerencie eficientemente os agendamentos de tatuagens e piercings com nosso sistema intuitivo de calendário."
                                icon={Calendar}
                            />
                            <Card
                                title="Personalização de Serviços"
                                description="Adapte os agendamentos para tatuagens ou piercings, incluindo tamanho, estilo e preferências do artista."
                                icon={Syringe}
                            />
                            <Card
                                title="Controle de Tempo"
                                description="Monitore a duração das sessões para otimizar a eficiência do seu estúdio e os horários dos artistas."
                                icon={Clock}
                            />
                            <Card
                                title="Análise de Negócios"
                                description="Gere dados perspicazes sobre estilos populares, horários de pico e receita para informar decisões de negócios."
                                icon={BarChart}
                            />
                            <Card
                                title="Agendamento Rápido"
                                description="Permita que os clientes agendem facilmente online, reduzindo o tráfego telefônico e oportunidades perdidas."
                                icon={Zap}
                            />
                            <Card
                                title="Perfis de Clientes"
                                description="Mantenha registros detalhados dos clientes, incluindo histórico de tatuagens, preferências e instruções de cuidados pós-tatuagem."
                                icon={User}
                            />
                        </div>
                    </div>
                </section>

                <section className="w-full flex float-col items-center justify-center bg-primary text-white py-[4em]">
                <div className="w-[90%] flex flex-col items-center justify-center">
                        <h2 className="text-[1.6em] mb-[2em]">Confiado por Estúdios de Ponta</h2>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                            <Card
                                title="App Revolucionário!"
                                description='"Este aplicativo de agenda revolucionou a forma como gerenciamos nosso estúdio de tatuagem. É imprescindível para qualquer artista ou proprietário de estúdio sério."'
                                icon={Star}
                                studio='Thai tattoo'
                            />
                            <Card
                                title="App Revolucionário!"
                                description='"Este aplicativo de agenda revolucionou a forma como gerenciamos nosso estúdio de tatuagem. É imprescindível para qualquer artista ou proprietário de estúdio sério."'
                                icon={Star}
                                studio='Thai tattoo'
                            />
                            <Card
                                title="App Revolucionário!"
                                description='"Este aplicativo de agenda revolucionou a forma como gerenciamos nosso estúdio de tatuagem. É imprescindível para qualquer artista ou proprietário de estúdio sério."'
                                icon={Star}
                                studio='Thai tattoo'
                            />
                        </div>
                    </div>
                </section>

                <section id="prices" className="w-full flex float-col items-center justify-center bg-white text-primary py-[4em]">
                <div className="w-[90%] flex flex-col items-center justify-center">
                        <h2 className="text-[1.6em] mb-[2em]">Preços</h2>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                            <PriceCard
                                title="Artista Solo"
                                items={["1 Perfil de Artista", "Agendamento Básico", "Gerenciamento de Clientes", "Agendamento Online"]}
                                price="50,00"
                            />

                            <PriceCard
                                title="Artista Solo"
                                items={["1 Perfil de Artista", "Agendamento Básico", "Gerenciamento de Clientes", "Agendamento Online"]}
                                price="50,00"
                            />

                            <PriceCard
                                title="Artista Solo"
                                items={["1 Perfil de Artista", "Agendamento Básico", "Gerenciamento de Clientes", "Agendamento Online"]}
                                price="50,00"
                            />
                        </div>
                    </div>
                </section>

                <section className="w-full flex flex-col items-center justify-center bg-highlight text-primary py-[4em]">
                    <div className="w-[90%] flex flex-col items-center  justify-center">
                        <h2 className="text-[1.6em] mb-[2em]">Pronto para Transformar Seu Estúdio?</h2>
                        <p>Junte-se à crescente comunidade de profissionais de tatuagem usando o InkTime Studio para elevar seus negócios.</p>
                        <a href="" className="bg-secondary py-2 px-4 rounded-lg mt-[4em] text-white hover:bg-white hover:text-secondary hover:border-2 border-2 hover:border-secondary border-secondary"><button>Faça um teste grátis!</button></a>
                    </div>

                </section>
            </main>
            <HomeFooter/>
        </>
    )

}