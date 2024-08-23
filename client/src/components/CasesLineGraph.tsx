import LodingImage from '../assets/Loading.svg'
import { useQuery } from '@tanstack/react-query'
import {
  getCasesWithDates,
  getAllGlobalCases,
} from '../helpers/apis/graph-apis'
import { aggregateDataByMonth } from '../helpers/data-by-month'
import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import Card from './ui/Card'

const CasesLineGraph: React.FC = () => {
  const {
    // query for cases with dates
    data: casesData,
    status: casesStatus,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['casesByDate'],
    queryFn: getCasesWithDates,
  })

  const { data: casesAll, status: casesAllStatus } = useQuery({
    // query for global cases
    queryKey: ['allCases'],
    queryFn: getAllGlobalCases,
  })

  let lineChartData
  if (casesStatus === 'success') {
    let Cases = casesData.cases
    lineChartData = aggregateDataByMonth(Cases)
  }

  const NumberToM = (value: number) => {
    // convert bigger num to M - million values
    if (value >= 1_000_000) {
      return `${Math.round(value / 1_000_000)}M`
    }
    return value.toString()
  }

  if (isLoading) {
    return <Card image={LodingImage} content='Loding...' />
  }

  if (isError) {
    return <Card image={LodingImage} content='Error Fetching Data' />
  }

  return (
    <div className='w-full h-full bg-neutral-200 font-palanquin shadow-lg rounded-lg overflow-auto flex flex-col p-4 md:p-5'>
      <div className='flex justify-between text-neutral-700 text-sm md:text-base'>
        <h3 className='font-bold text-lg'>Cases Fluctuations Global</h3>
        <div className='flex flex-wrap md:gap-4'>
          <span>
            All Cases :{' '}
            {casesAllStatus === 'success'
              ? casesAll.cases
              : 'data not available'}
          </span>
          <span>
            Deaths :{' '}
            {casesAllStatus === 'success'
              ? casesAll.deaths
              : 'data not available'}
          </span>
          <span>
            Recovered :{' '}
            {casesAllStatus === 'success'
              ? casesAll.recovered
              : 'data not available'}
          </span>
        </div>
      </div>

      <ResponsiveContainer>
        <LineChart
          data={lineChartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis tickFormatter={NumberToM} />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='cases'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CasesLineGraph
