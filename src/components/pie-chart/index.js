import React from "react";
import * as d3 from "d3";

const Arc = ({ data, index, createArc, colors, format }) => {
  return (
  <g key={index} className="arc">
    <path className="arc" d={createArc(data)} fill={colors(index)} />
    <text
      transform={`translate(${createArc.centroid(data)})`}
      textAnchor="middle"
      fill="black"
      fontSize="12"
    >
      {data.data.name}
    </text>
  </g>
)};

const Pie = props => {
  const createPie = d3
    .pie()
    .value(d => d.value)
    .sort(null);

  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);

  const colors = d3.scaleOrdinal(d3.schemeSet3);
  const format = d3.format(".2f");
  const data = createPie(props.data);
  
  const mergeData = (n, data) => {
    let mergedData = 0;
    for(let i = 0; i <= data.length; i++) {
      if (i > n) {  
        mergedData += data[i].value 
      }
    }
  }
  return (
    <svg width={props.width} height={props.height}>
      <g transform={`translate(${props.outerRadius} ${props.outerRadius})`}>
        {data.map((d, i) => 
        {
          // if (i > 15)
          return (
          <Arc
            key={i}
            index={i}
            data={d}
            createArc={createArc}
            colors={colors}
            format={format}
          />
        )})}
      </g>
    </svg>
  );
};

export default Pie;
