import './placeholder.css'
import list from '../../assets/images/06631a9c98dc64314aff22b4bde7b5bc.png'


const Placeholder = () => {
  return (
    <div className='placeholder-div'>
        <h3 className='placeholder-text'>There is no task in your list yet!</h3>
        <img src={list} alt="shopping list" />
    </div>
  )
}

export default Placeholder