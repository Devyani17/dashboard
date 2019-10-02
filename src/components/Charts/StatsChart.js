import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    stat: 'Eat', A: 12, B: 110, fullMark: 150,
  },
  {
    stat: 'Drink', A: 80, B: 110, fullMark: 150,
  },
  {
    stat: 'Sleep', A: 80, B: 140, fullMark: 150,
  },
  {
    stat: 'Work', A: 50, B: 140, fullMark: 150,
  },
  {
    stat: 'Code', A: 150, B: 90, fullMark: 150,
  },
  {
    stat: 'Cycle', A: 65, B: 100, fullMark: 150,
  },
  {
    stat: 'Run', A: 150, B: 90, fullMark: 150,
  },
];

export default class StatsChart extends PureComponent {

  render() {
    return (
        <div className="statsChartWrapper">
      <RadarChart cx={100} cy={140} outerRadius={50} width={150} height={150} data={data} className="statsChart">
        <PolarGrid />
        <PolarAngleAxis dataKey="stat" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="stat_2" dataKey="B" stroke="#ffa500" fill="#ecc681" fillOpacity={0.6} />
        <Radar name="stat_1" dataKey="A" stroke="#8884d8" fill="#96ccd6" fillOpacity={0.6} />
      </RadarChart>
      </div>
    );
  }
}