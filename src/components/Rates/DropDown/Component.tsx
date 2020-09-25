import React, { useCallback, useMemo } from 'react'
import { TReduxProps } from './Container'
import { CURRENCY } from 'config'
import { Select } from 'antd'


const { Option } = Select;

export type TComponentProps = {
} & TReduxProps

interface IMemoizedOption {
  value: string
  text: string
}

const DropDown: React.FC<TComponentProps> = ({ setCurrency, currency }) => {

  const memoizedOptions: Array<IMemoizedOption> = useMemo(
    () => Object.keys(CURRENCY.LIST).map((key) => ({
      value: key,
      text: CURRENCY.LIST[key],
      
    })), 
    [ CURRENCY.LIST ]
  );


  const onSelectChange = useCallback((value) => {

    setCurrency(value);

  }, [ setCurrency ])


  return (
    <Select defaultValue={currency} style={{ width: 300 }} onChange={onSelectChange}>
      {memoizedOptions.map((option: IMemoizedOption) => <Option key={option.value} selected={true} value={option.value}>{option.text}</Option>)}
    </Select>
  )
}

export default DropDown
