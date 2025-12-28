import React from 'react'
import { useState } from 'react'
import ContentMain from '../components/Content/ContentHome/ContentHome'

export const useMainContent = () => {
  const [content, setContent] = useState<JSX.Element | null>(
    React.createElement( ContentMain, null, null)
  )

  return { content, setContent }
}
