const HrTitleLine = ({ color = 'black', children }) => {
  return (
    <div className="relative block pb-4">
      <div
        className={`absolute left-0 top-4 border-b-2 border-${color} w-1/2`}
      ></div>
      <div className="absolute left-1/2">
        <div
          className={`relative -left-1/2 top-1/2 z-30 bg-white px-2 text-${color} text-2xl`}
        >
          {children}
        </div>
      </div>
      <div
        className={`absolute right-0 top-4 border-b-2 border-${color} w-1/2`}
      ></div>
    </div>
  )
}

export default HrTitleLine
