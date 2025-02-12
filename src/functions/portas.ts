import PortaModel from "@/models/porta";

export function criarPortas(qtd: number, portaComPresente: number): PortaModel[] {
    return Array.from({ length: qtd }, (_, i) => {
        const numero = i + 1;
        const temPresente = numero === portaComPresente;
        return new PortaModel(numero, temPresente);
    });
}

export function atualizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[] {
    return portas.map(portaAtual => {
        const igualModificada = portaAtual.numero === portaModificada.numero;

        if (igualModificada) {
            return portaModificada;
        } else {
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionar();
        }
    });
}