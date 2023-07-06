'use client'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type Props = {
    value: number
    color: string
}
const CircularProgress = ({value, color}: Props) => {
  
  let trailColor
  const progressColor = (value:number) => {
    if (value < 35) return trailColor = 'rgb(99, 42, 38)'
    if (value >= 35 && value < 70 ) return trailColor = "rgb(92, 85, 36)"
    if (value >= 70 ) return trailColor = "rgb(41, 92, 35)"
    }
    progressColor(value)
  return (
    <div className='bg-gray-800 flex p-1 items-center justify-center rounded-full'>
        <CircularProgressbar value={value} text={`${value}%`} styles={buildStyles({
            pathColor: color,
            textColor: "#fff",
            backgroundColor:  "blue",
            trailColor: trailColor
        })} />
    </div>
  )
}

export default CircularProgress