import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((item, index) => (
        <ChartBar
          value={item.value}
          label={item.label}
          maxValue={totalMaxValue}
          key={index}
        />
      ))}
    </div>
  );
};

export default Chart;
