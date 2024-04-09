import Image from "next/image";
import styles from "./eventAcceuil.module.css";

export default function EventAcceuil() {
  return (
    <div className={styles.eventAcceuil}>
      <div>
      
        <Image src="/dota2_event.jpg" alt="image de dota 2" width={500} height={300} /> 
        <p className={styles.text}>ESL ONE Championship</p>
      </div>
      <div>
       
        <Image src="/match_ufc.jpg" alt="image du match UFC" width={500} height={300} /> 
        <p className={styles.text}>L'incroyable match de UFC</p>
      </div>
    </div>
  );
}
