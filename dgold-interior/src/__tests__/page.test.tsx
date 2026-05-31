import { render, screen } from '@testing-library/react'
import Home from '../app/page'

// Mocking components that use Canvas or complex R3F hooks
jest.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div data-testid="canvas-mock">{children}</div>,
  useFrame: jest.fn(),
  useThree: () => ({ size: { width: 100, height: 100 } }),
}))

jest.mock('@react-three/drei', () => ({
  OrbitControls: () => null,
  PerspectiveCamera: () => null,
  ContactShadows: () => null,
  Float: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  Environment: () => null,
}))

// Mock framer-motion to avoid animation issues in JSDOM
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
    nav: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

describe('Home Page', () => {
  it('renders the hero section heading', () => {
    render(<Home />)
    // Looking for "D'Gold" in the text
    const heading = screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'h1' && content.includes("D'Gold")
    })
    expect(heading).toBeInTheDocument()
  })

  it('renders the catalog section', () => {
    render(<Home />)
    expect(screen.getByText(/Curated Collection/i)).toBeInTheDocument()
  })

  it('renders the contact section', () => {
    render(<Home />)
    expect(screen.getByText(/Ready to transform your space/i)).toBeInTheDocument()
  })
})
