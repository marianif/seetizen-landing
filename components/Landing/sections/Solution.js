import styles from "@/styles/home/Solution.module.css";

const Solution = () => {
  return (
    <div className={styles.container}>
        <h3 className="text-light">
          La nostra <br/> <span className="gradient-text">Missione</span>
        </h3>
      <div className={styles.mission}>
        <div>
        <p className="p-md">
          Seetizen nasce com obiettivo di rimettere il territorio e le relazioni di nuovo al centro e rispondere ai bisogni sociali, culturali e aggregativi delle comunità locali. 
          I social più famosi non nascono con intenzione di connettere le persone nella vita reale e che sitratti degli eventi di Facebook 
        </p>
        </div>
       <div>
       <p className="p-md">
         o dei post di instragram e si dimostrano strumenti che hanno dimostato tutti i propri limiti quando è comunicare e farsi conoscere nella propria dimensione locale. Seetizen nasce per offrire un servizio alternativo per rispondere a queste esigenze
        </p>
        </div> 
      </div>
    </div>
  );
};

export default Solution;
