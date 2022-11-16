import './style.css'

export function TabBar(){
  return(
    <div className='buttons-tabbar'>
      <button className='button-tabbar'>Tweets</button>
      <button className='button-tabbar'>Tweets & replies</button>
      <button className='button-tabbar'>Media</button>
      <button className='button-tabbar'>Likes</button>
    </div>
  )
}