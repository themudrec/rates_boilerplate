import React, { useEffect, useMemo } from 'react'
import ApexChart from 'react-apexcharts'
import { TReduxProps } from './Container'
import { StyledContainer, StyledAreaFooter, StyledSpinContainer, StyledContent } from './style'
import DropDown from './DropDown'
import { ICommonCurrencyState } from 'reducers/common'
import { Spin } from 'antd'

export type TComponentProps = {
} & TReduxProps

const WEEK_TIME = 60 * 60 * 24 * 7 * 1000;

const Rates: React.FC<TComponentProps> = ({ currency, dynamic, fetchRatesByCurrency, fetching }) => {

  const type = 'line'
  
  const chartOptions = useMemo(() => ({
    chart: {
      zoom: {
        enabled: false,
      },

    },
    xaxis: {
      categories: dynamic.map((rate: ICommonCurrencyState) => rate.week),
    },

  }), [ dynamic ])


  const chartSeries = useMemo(() => [
    {
      name: "BYN",
      data: dynamic.map((rate: ICommonCurrencyState) => rate.value)
    }
    
  ], [ dynamic ]);


  useEffect(() => {
    fetchRatesByCurrency(currency, new Date(Date.now() - WEEK_TIME), new Date());
    
  }, [ currency ]);

  return (
    <StyledContainer>
      <StyledContent>
        <ApexChart
          options={chartOptions}
          series={chartSeries}
          type={type}
          width={800}
          height={400}
        /> 

        { fetching &&  <StyledSpinContainer><Spin /></StyledSpinContainer>  }

      </StyledContent>
     

      <StyledAreaFooter>

        <DropDown />

      </StyledAreaFooter>

    </StyledContainer>
  )
}

export default Rates
