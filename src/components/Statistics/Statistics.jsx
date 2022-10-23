import css from './Statistics.module.css'
import PropTypes from 'prop-types'

export const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>
        <ul className={css.statList}>
            {stats.map(({ id, label, percentage }) => {
               return <li className={css.item} key={id}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
                </li>
            })}
        </ul>
    </section >
}

Statistics.protoType = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
}