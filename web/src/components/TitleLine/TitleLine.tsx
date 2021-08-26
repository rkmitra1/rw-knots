interface TitleLineProps {
  tag?: string
  className?: string
  children: JSX.Element | string
}

const TitleLine: React.FC<TitleLineProps> = ({ tag, className, children }) => {
  if (tag === 'h2') {
    return (
      <h2 className={`relative inline-block ${className}`}>
        {children}
        <div className="absolute left-0 right-0 w-full h-[1px] ml-auto mr-auto bg-brandMain top-full"></div>
      </h2>
    )
  }

  return (
    <h3 className={`relative inline-block ${className}`}>
      {children}
      <div className="absolute left-0 right-0 w-full h-[1px] ml-auto mr-auto bg-brandMain top-full"></div>
    </h3>
  )
}

// Note: This component wraps content in H2 and adds a colored underline under the content only. Used in override of markdown-to-jsx

// example after css
// content: '';
// position: absolute;
// left: 0;
// right: 0;
// top: 100%;
// margin: 0px auto;
// width: 100%;
// height: 1px;
// background: #3366CC;

export default TitleLine
