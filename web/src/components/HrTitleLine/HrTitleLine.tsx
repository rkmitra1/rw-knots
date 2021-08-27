const HrTitleLine = ({ color = 'black', background = 'white', children }) => {
  return (
    <div className="relative block min-h-[4em]">
      <div
        className={`absolute left-0 top-4 border-b-2 border-${color} w-1/2`}
      ></div>
      <div className="absolute text-center left-1/2">
        <div
          className={`relative -left-1/2 top-1/2 z-30 bg-${background} px-2 text-${color} text-2xl`}
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
