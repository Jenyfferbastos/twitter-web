import './style.css';
import IconSearchBar from '../../assets/img/IconSearchBar.svg';

export function SearchBar(){
  return(
     <div className='divSearchBar'>
      <img className='imgLupaSearch' src={ IconSearchBar }></img>
      <input className='inputSearch' type="text" placeholder='Search Twitter'/>
     </div>
  )
}