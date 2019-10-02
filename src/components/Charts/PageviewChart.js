import React, { PureComponent } from 'react';
import { AreaChart, Area } from 'recharts';

const data = [
  {
    name: 'A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'G', uv: 3490, pv: 4300, amt: 2100,
  },
  {
    name: 'H', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'I', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'J', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'K', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'L', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'M', uv: 2390, pv: 3800, amt: 2500,
  },
];

export default class Example extends PureComponent {

  render() {
    return (
      <AreaChart
        width={300}
        height={30}
        data={data}
        margin={{
          top: 5, right: 0, left: 0, bottom: 5,
        }}
      >
        <Area type="monotone" dataKey="uv" stroke="#ffa500" fill="#ecc681" />
      </AreaChart>
    );
  }
}
