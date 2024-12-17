import Banner from "@/app/modules/home/components/Banner";
import HomeHeader from "@/app/modules/home/components/HomeHeader";
import Card from '../../modules/home/components/Card';
import icons from '../../shared/icons/HomeIcons';
import PriceCard from "@/app/modules/home/components/PricesCard";

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
                                icon={icons.calendar}
                            />
                            <Card
                                title="Personalização de Serviços"
                                description="Adapte os agendamentos para tatuagens ou piercings, incluindo tamanho, estilo e preferências do artista."
                                icon={icons.customize}
                            />
                            <Card
                                title="Controle de Tempo"
                                description="Monitore a duração das sessões para otimizar a eficiência do seu estúdio e os horários dos artistas."
                                icon={icons.clock}
                            />
                            <Card
                                title="Análise de Negócios"
                                description="Gere dados perspicazes sobre estilos populares, horários de pico e receita para informar decisões de negócios."
                                icon={icons.analytics}
                            />
                            <Card
                                title="Agendamento Rápido"
                                description="Permita que os clientes agendem facilmente online, reduzindo o tráfego telefônico e oportunidades perdidas."
                                icon={icons.fastScheduling}
                            />
                            <Card
                                title="Perfis de Clientes"
                                description="Mantenha registros detalhados dos clientes, incluindo histórico de tatuagens, preferências e instruções de cuidados pós-tatuagem."
                                icon={icons.profile}
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
                                icon={icons.star}
                                studio='Thai tattoo'
                            />
                            <Card
                                title="App Revolucionário!"
                                description='"Este aplicativo de agenda revolucionou a forma como gerenciamos nosso estúdio de tatuagem. É imprescindível para qualquer artista ou proprietário de estúdio sério."'
                                icon={icons.star}
                                studio='Thai tattoo'
                            />
                            <Card
                                title="App Revolucionário!"
                                description='"Este aplicativo de agenda revolucionou a forma como gerenciamos nosso estúdio de tatuagem. É imprescindível para qualquer artista ou proprietário de estúdio sério."'
                                icon={icons.star}
                                studio='Thai tattoo'
                            />
                        </div>
                    </div>
                </section>

                <section className="w-full flex float-col items-center justify-center bg-white text-primary py-[4em]">
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
            </main>
            

        </>
    )

}