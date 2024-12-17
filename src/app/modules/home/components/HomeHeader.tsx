import TattooMachineIcon from "@/app/shared/icons/TattooMachineIcon";
import Link from "next/link";

export default function HomeHeader(){
    return(
        <header className="w-full flex flex-col items-center justify-center py-4 border-b border-secondary">
            <div className="w-[90%] flex flex-row items-center justify-between">
                <div className="w-full flex flex-row items-center justify-start gap-2 text-secondary">
                    <TattooMachineIcon/>
                    <h1 className="text-text-white font-bold">Agenda_Ink</h1>
                </div>

                <div className="w-full flex flex-row items-center justify-end gap-4">
                    <Link className="hover:text-secondary" href={""}>Preços</Link>
                    <Link className="hover:text-secondary" href={""}>Contato</Link>
                </div>
            </div>
        </header>
    )
}