import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

export default function ReportsChart() {

    return (
        <Progress
            percent={69}
            style={{
                minHeight: '5px'
            }}
            theme={
                {
                  active: {
                    symbol: '',
                    trailColor: '#cae3e8',
                    color: '#8fc8ec',
                  }
                }
              }
            />

    )
}