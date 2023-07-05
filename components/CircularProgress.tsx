'use client'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type Props = {
    value: number
    color: string
}
const CircularProgress = ({value, color}: Props) => {
  return (
    <div>
        <CircularProgressbar value={value} text={`${value}%`} styles={buildStyles({
            pathColor: color,
            textColor: "#fff",
            backgroundColor:  "#000"
        })} />
    </div>
  )
}

export default CircularProgress