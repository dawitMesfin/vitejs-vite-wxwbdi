import { useState } from "react"



interface ChildrenProps {
  children : string,
  maxChar? : number
}
const ExpandableComponent = ({ children , maxChar = 100 }: ChildrenProps) => {

const [isExpanded , setIsExpanded] = useState(false)
const handleExpanison = () => {
  setIsExpanded(!isExpanded)
}
const buttonLable = isExpanded ? 'less' : 'more'

if(children.length <= maxChar) return <>{children}</>

const text = isExpanded? children : children.substring(0,maxChar)

  return(
    <>
    <p>{text}...<button onClick={handleExpanison}>{buttonLable}</button></p>
    </>
  )
}
export default ExpandableComponent