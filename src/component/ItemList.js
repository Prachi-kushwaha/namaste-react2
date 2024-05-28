import { MENU_IMAGE_URL } from "../utils/contants"

const ItemList = ({items}) =>{
    console.log(items)
    return (
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="border-b-2 border-grey pb-3  flex justify-between items-center">
                    <div className="w-9/12 flex flex-col text-left py-2 mr-4">
                    <span className="mr-2 font-bold">{item.card.info.name}</span>
                    <span> - ₹{(item.card.info.price)/100}</span>
                    <span className=" right-1">{item.card.info.description}</span>
                    </div>
                    <div className="w-3/12  my-3 ">
                        <div className="absolute">
                          <button className="relative p-2 bg-black shadow-lg rounded-md text-white flex items-center">Add +</button>
                        </div>
                        <img className="w-full  " src={MENU_IMAGE_URL + item.card.info.imageId}/>
                    </div>
                </div>
            ))} 
        </div>
    )
}

export default ItemList