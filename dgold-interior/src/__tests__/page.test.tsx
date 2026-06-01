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
jest.mock('framer-motion', () => {
  const React = require('react');
  const Dummy = ({ children, ...props }: any) => React.createElement('div', props, children);
  return {
    motion: {
      div: Dummy,
      h1: Dummy,
      h2: Dummy,
      p: Dummy,
      button: Dummy,
      nav: Dummy,
      a: Dummy,
      span: Dummy,
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  };
})

describe('Home Page', () => {
  it('renders the hero section heading', () => {
    render(<Home />)
    // Looking for "Bespoke" in the text
    const headings = screen.getAllByText(/Bespoke/i)
    expect(headings.length).toBeGreaterThan(0)
  })

  it('renders the signature collection', () => {
    render(<Home />)
    expect(screen.getByText(/Signature Collection/i)).toBeInTheDocument()
  })

  it('renders the contact section', () => {
    render(<Home />)
    expect(screen.getByText(/Start Your/i)).toBeInTheDocument()
  })
})
