/* 
  text
  varient
  type
  handleClick
*/

type Button = {
  text: string;
  varient?: string;
  type?: "button" | "submit" | "reset" | undefined;
  handleClick?: void 
}

function Button({
  text, varient, type, handleClick
}: Button){
  const varients = {}

  function HandleClickFunction(){
    if(handleClick){
      handleClick()
  }

  return(
    <button
      type={type? `${type}`: "button"} 
      onClick={handleClick}
    >
      { text }
    </button>
  )
}