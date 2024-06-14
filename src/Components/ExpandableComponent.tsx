


interface ChildrenProps {
  children : string,
  maxChar : number
}
const ExpandableComponent = ({ children , maxChar }: ChildrenProps) => {



  return(
    <>
    <p>{children}</p>
    </>
  )
}