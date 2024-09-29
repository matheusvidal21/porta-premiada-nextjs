"use client";

import styles from "./Jogo.module.css";
import Porta from "@/components/porta/Porta";
import PortaModel from "@/models/porta";
import { useEffect, useState } from "react";
import { atualizarPortas, criarPortas } from "@/functions/portas";
import Link from "next/link";

export default function Jogo({ params }: { params: { portas: string, comPresente: string } }) {	
    const [valido, setValido] = useState<boolean>(false);
    const [qtdPortas, comPresente] = [+params.portas, +params.comPresente];
    const [portas, setPortas] = useState<PortaModel[]>(criarPortas(+qtdPortas, +comPresente));

    useEffect(() => {
      const qtdPortasValido = qtdPortas >= 3 && qtdPortas <= 100;
      const temPresenteValido = comPresente >= 1 && comPresente <= qtdPortas;
      setValido(qtdPortasValido && temPresenteValido);
    }, [portas, qtdPortas, comPresente]);

    function renderizarPortas() {
      return valido && portas.map(porta => {
        return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))}/>
      });
    }
  
    return (
      <div id={styles.jogo}>
        <div className={styles.portas}>
            {valido ?
              renderizarPortas() :
              <h2>Valores inválidos</h2>
            }	
        </div>
        <div className={styles.botoes}>
            <Link href="/">
                <button>Reiniciar jogo</button>
            </Link>
        </div>
      </div>
    );
}