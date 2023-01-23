import './featuredProducts.scss'
import Cards from '../card/Cards'
import useFetch from '../hooks/useFetch'






const FeaturedProducts = ({ type }) => {

  const {data, loading, error} = useFetch(`/products?populate=*&filters[type][$eq]=${type}`);  

console.log(data);

    return (

        <div className="featuredProducts">

            <div className="top">

                <h1>{type} Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem expedita ducimus culpa quia quisquam a. Sequi cupiditate excepturi fugit laudantium nihil! Unde voluptatem nulla pariatur voluptas eaque ad quisquam numquam quo, earum ipsa vel?</p>

            </div>


            <div className="bottom">
                {error? 'Something went wrong': loading? 'loading..': data.map((item) => {
                    return <Cards key={item.id} item={item} />
                })}

            </div>
        </div>
    )
}

export default FeaturedProducts




// const data = [
    //     {
    //         id: 1,
    //         img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Long Sleeve Graphic T-Shirt",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Coat",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12
    //     },
    //     {
    //         id: 3,
    //         img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Skirt",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12
    //     },
    //     {
    //         id: 4,
    //         img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title: "Hat",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12
    //     },
    // ]


    // http://localhost:1337/api/products?populate=*&filters[fields][operator]=value

    // https://loacalhost:1337/api/products?populate=*filters[type][$eq]=featured
    // https://loacalhost:1337/api/products?populate=*filters[type][$eq]=trending