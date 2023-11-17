import "./card.css"
import  img  from "../../assets/images.jpeg";

const Cardw=()=>{
    return(
      <div className="aa">
      <div className="container">
        <p className="main-title">Movies List</p>
        <div className="card-item">
          <div className="card">
            <img src={img} alt="" />
            <div className="title">
              <p>1</p>
            </div>
          </div>
          <div className="card">
            <img src={img} alt="" />
            <div className="title">
              <p>2</p>
            </div>
          </div>
          <div className="card">
            <img src={img} alt="" />
            <div className="title">
              <p>3</p>
            </div>
          </div>
          <div className="card">
            <img src={img} alt="" />
            <div className="title">
              <p>4</p>
            </div>
          </div>
          <div className="card">
            <img src={img} alt="" />
            <div className="title">
              <p>5</p>
            </div>
          </div>
          <div className="card">
            <img src={img} alt="" />
            <div className="title">
              <p>6</p>
            </div>
          </div>
          <div className="card">
            <img src={img} alt="" />
            <div className="title">
              <p>7</p>
            </div>
          </div>
          <div className="card">
            <img src={img} alt="" />
            <div className="title">
              <p>8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
            

        
    )
}
export default Cardw;