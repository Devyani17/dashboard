import React, { PureComponent } from 'react';
import { BarChart, Bar } from 'recharts';

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
  {
    name: 'N', uv: 3490, pv: 4300, amt: 2100,
  },
  {
    name: 'O', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'P', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Q', uv: 2000, pv: 5000, amt: 2290,
  },
  {
    name: 'R', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'S', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'T', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'U', uv: 3490, pv: 4300, amt: 5000,
  }, {
    name: 'V', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'W', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'X', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Y', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Z', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class SalesChart extends PureComponent {

  render() {
    return (
      <BarChart width={240} height={30} data={data}>
        <Bar dataKey="uv" fill="#d8d8d8" />
      </BarChart>
    );
  }
}
