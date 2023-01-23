import List from '../../components/list/List'
import './products.scss'
import { useState } from 'react'
import useFetch from '../../components/hooks/useFetch'
import { useParams } from 'react-router-dom'




const Products = () => {
  const catId = parseInt(useParams().id)
  
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState('asc');
  const[selectedSubCateg, setSelectedSubCateg] = useState([]);


const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);

const eventHandle = (e) =>{
  const value = e.target.value;
  const isChecked = e.target.checked;
  setSelectedSubCateg(isChecked ? [...selectedSubCateg, value]: selectedSubCateg.filter((item)=> item !== value))
  
}
console.log(selectedSubCateg);


  return (
    <div className="products">
      <div className="left">

        <div className="filter_item">
          <h3>Product Categories</h3>
          {error? 'something went wrong': loading? 'loading..': data.map((item)=>{
            return   <div className="input_item" key={item.id}>
            <input type="checkbox" id={item.id} value={item.id} onChange={eventHandle}/>
            <label htmlFor={item.id}>{item.attributes.title}</label>
          </div>
          })}
        

        </div>

        <div className="filter_item">
          <h3>Filter by price</h3>
          <div className="input_item">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) => { setMaxPrice(e.target.value) }} />
            <span>{maxPrice}</span>
          </div>

        </div>

        <div className="filter_item">
          <h3>Sort by</h3>
          <div className="input_item">
            <input type="radio" name='price' id='asc' value='asc' onChange={() => setSort('asc')} />
            <label htmlFor="asc">Price (Low to high)</label>
          </div>
          <div className="input_item">
            <input type="radio" name='price' id='desc' value='desc' onChange={() => setSort('desc')} />
            <label htmlFor="desc">Price (High to low)</label>
          </div>

        </div>

      </div>

      <div className="right">

        <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        <List catId={catId} sort={sort} maxPrice={maxPrice} subCat={selectedSubCateg} />
      </div>
    </div>
  )
}

export default Products