import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Dropdown } from 'vtex.styleguide'
import { defineMessages, useIntl } from 'react-intl'

type WPOrderType = 'desc' | 'asc'
interface WordpressOrderBySelectProps {
  appData: any
  setOrder: Dispatch<SetStateAction<WPOrderType>>
  order: WPOrderType
}

const WordpressOrderBySelect: StorefrontFunctionComponent<WordpressOrderBySelectProps> = ({
  appData,
  order,
  setOrder,
}) => {
  const intl = useIntl()
  const orderOptions = [{
    value: 'desc',
    label: 'DESC'
  },
  {
    value: 'asc',
    label: 'ASC'
  }
  ]
  const onChangeOrderHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setOrder(value as WPOrderType)
  }

  return (
    <Dropdown
      label={appData?.appSettings?.displayShowRowsText === false ? null : intl.formatMessage(messages.orderByDate)}
      placeholder={appData?.appSettings?.displayShowRowsText === false ? null : intl.formatMessage(messages.order)}
      variation='inline'
      size='small'
      value={order}
      options={orderOptions}
      onChange={onChangeOrderHandler}
    />
  )
}

const messages = defineMessages({
  order: {
    defaultMessage: 'order',
    id: 'store/wordpress-integration.wordpressOrder.order',
  },
  orderByDate: {
    defaultMessage: 'Order by date',
    id: 'store/wordpress-integration.wordpressOrder.orderByDate',
  },
})

export default WordpressOrderBySelect
