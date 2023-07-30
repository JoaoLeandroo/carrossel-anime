import '../Card/card.css'

export default function Card(props) {
    return(
        <section>
            <h2>{props.tittle}</h2>
            <div>
                <img src={props.img} alt={props.altImg} />
            </div>
        </section>
    )
}