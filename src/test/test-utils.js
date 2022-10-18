import React from 'react'
import {render} from '@testing-library/react'
import {OrderDetailProvider} from "../hooks/scoopContext.jsx";

export const renderWithOrderDetailContext = (ui, options) =>
  render(ui, {wrapper: OrderDetailProvider, ...options})

// re-export everything
export * from '@testing-library/react'

//override
export {renderWithOrderDetailContext as render}