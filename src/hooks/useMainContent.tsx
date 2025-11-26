import { useState } from 'react'

/**
 * Custom hook to manage main content state.
 * Separates state logic from component logic for better testability.
 */
export const useMainContent = () => {
  const [content, setContent] = useState<JSX.Element | null>(
    <main className="main-content">
      <h1>Vite + React + TypeScript</h1>
      <p>Hello, World!</p>
    </main>
  )

  return { content, setContent }
}
