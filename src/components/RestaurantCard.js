import {CDN_URL} from "../utils/constants";
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId,
        name,
        cuisines,
        avgRating
    }=resData?.info;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
           
            <img 
            className="res-logo"
            alt="res-logo"
            src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h4>{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}stars</h5>
           
        </div>
    );
};

export default RestaurantCard;