import LayOut from '../components/Product/LayOut'
import { useAppContext } from '../context/AppContext/AppContext'
function WishList() {
  const { wishListState, removehandler1 } = useAppContext()


  return (
    <LayOut hideFilter>
      <div className="grid-container">
       {wishListState.map(item => {
        // eslint-disable-next-line jsx-a11y/alt-text
        return <div key={item.id}> <h1>{item.title}</h1><img style={{width: '150px'}} src={item.image} />   
        
         <button onClick={() => removehandler1(item)}>Remove</button>
        </div>
       })}
      </div>
    </LayOut>
  )
}

export default WishList
