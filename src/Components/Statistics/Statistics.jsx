import css from "./Statistics.module.css";

// console.log(css.statistics)
const Statistics = ({ title, stats }) => {

    let randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    const color = {
        color: "white",
    }
    const alertStyles = {
        backgroundColor: randomColor,
    };
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statList}>
                {stats.map(stat => {
                    return (
                        <li className={css.item} key={stat.id} style={alertStyles}>
                            <span className={css.label} style={color}>{stat.name}</span>
                            <span className={css.percentage} style={color}>{stat.percentage}</span>
                        </li>
                    )
                })}


            </ul>
        </section>
    );
};

export default Statistics;
