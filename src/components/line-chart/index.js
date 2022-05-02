import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import PopulationGrowth from "../../data/population-growth.json";

export default function LineComponent() {
  return (
    <ResponsiveContainer width="99%" aspect={3}>
      <LineChart
        width={1000}
        height={500}
        data={PopulationGrowth}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Year" />
        <YAxis
          tick={{ fontSize: 10 }}
          ticks={[100000000, 500000000, 1000000000, 1500000000]}
          interval={0}
        />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="TotalPopulation"
          stroke="#8884d8"
          activeDot={{ r: 15 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
