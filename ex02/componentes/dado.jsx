import styles from "./dado.module.css";

export function Dado(props){
    
    let url;
    
    switch(props.valor){
        case 1:
            url = "https://www.svgrepo.com/show/499118/dice-one.svg";
            break;
        case 2:
            url = "https://www.svgrepo.com/show/499122/dice-two.svg";
            break;
        case 3:
            url = "https://www.svgrepo.com/show/499121/dice-three.svg";
            break;
        case 4:
            url = "https://www.svgrepo.com/show/499119/dice-four.svg";
            break;
        case 5:
            url = "https://www.svgrepo.com/show/499117/dice-five.svg";
            break;
        case 6:
            url = "https://www.svgrepo.com/show/499120/dice-six.svg";
            break;

    }
    return (
        <div className={styles.div}> 
            <img src={url} alt="" className={styles.dado}/>
        </div>
    )
}