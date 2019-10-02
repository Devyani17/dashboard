import React from 'react';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function InvoiceProgressChart(props) {

    return (
        <CircularProgressbar
        value={props.progress}
        strokeWidth={50}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathColor: '#28b581'
        })}
      />

    )
}

