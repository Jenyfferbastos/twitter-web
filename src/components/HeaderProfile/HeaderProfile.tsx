import "./style.css"
import { DynamicIcon } from "../Icons/Icons"

export function HeaderProfile(){
  return(
    <div className="container-header-profile">
      <button className="button-arrow-back">
       <DynamicIcon icon="BackArrowDefault" theme="common" />
       </button>
       <div>
        <h1 className="title-header-profile">Name</h1>
        <p className="text-header-profile">9 Tweets</p>
       </div>
    </div>
  )
}