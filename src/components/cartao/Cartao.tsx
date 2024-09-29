import styles from './Cartao.module.css'

interface CartaoProps {
    bgColor?: string;
    children?: React.ReactNode;
}

export default function Cartao(props: CartaoProps) {
    return (
        <div className={styles.cartao}
            style={{
                backgroundColor: props.bgColor ?? "#fff"
            }}>
            {props.children}
        </div>
    )
}