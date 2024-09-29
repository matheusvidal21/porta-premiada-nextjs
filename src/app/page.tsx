"use client";

import Link from "next/link";
import styles from "./page.module.css";
import Cartao from "@/components/cartao/Cartao";
import EntradaNumerica from "@/components/EntradaNumerica/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
  const [qtdPortas, setQtdPortas] = useState<number>(3);
  const [portaComPresente, setPortaComPresente] = useState<number>(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Qtd Portas?" value={qtdPortas} onChange={novaQtd => setQtdPortas(novaQtd)}/>
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Porta com presente?" value={portaComPresente} onChange={novaPortaComPresente => setPortaComPresente(novaPortaComPresente)}/>
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link href={`/jogo/${qtdPortas}/${portaComPresente}`} className={styles.link}>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
