interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 md:px-4">
      {children}
    </div>
  )
}
