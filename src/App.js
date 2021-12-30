import logo from './logo.svg';
import './App.css';

// export default function App() {
//   // const images= ["https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max","https://i.pinimg.com/originals/f8/63/55/f86355fcc3cd487a001b968797e65881.jpg"]
//   // const names= ["Surya Challa","Jaya Nagothi"];
//   const users = [
//     { name: "Surya", image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"},
//     { name:"Jaya Nagothi", image:"https://i.pinimg.com/originals/f8/63/55/f86355fcc3cd487a001b968797e65881.jpg"}]
  
//   return (
//     <div className="App">
//     <Header />
//     {/* Map function - It trasnforms array of strings to Arrays components/JSX*/}
//     {users.map(({name, image}) =>
//       <Msg name = {name} image = {image} />
//     )}
//     </div>

//   );
// }

// function Header(){
//   return(
//     <div className="container">
//         <div className="nav">
//           <ul className="nav-items"> 
//             <li>Home</li>
//             <li>About us</li>
//             <li>Contact</li>
//             <li>My Resume</li>
//           </ul>
//         </div>
//     </div>
//   )
// }

// function Msg({image, name}){
  
//     return(
//     <div className="content">
//       <img src={image} className="image"></img>
//       <h1 className="user-name">Hello {name} 😁!</h1>
//     </div>  
//     );
//   }


// Title, Poster, Rating, Synopsis

export default function App(){
  return(
    <div className="App">

      <div className="movie-list">
        <Movie title="Jack Reacher" poster="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT1we9HbnNx_kLN47aVW8bnBf22ufFsTfkQAza7qWRSgSiQn2bH" synopsys="In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy." rating="9.5" likes="1080"/>
        <Movie title="The Firm" poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjg75ro0g9XHEnaeCedghxi4pkcmpBjyOlTC2lc34ZPpA1U8p6" synopsys="In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy." rating="9.8" likes="200"/>
        <Movie title="Collateral Damage" poster="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/collateral-1607606157.jpg" synopsys="In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy." rating="9.1" likes="955"/>
        <Movie title="Knight and Day" poster="https://lh3.googleusercontent.com/proxy/OsHUbWaJM0ya9PD5E2fcGTip13YcJ4NP86F6WoUiQqYT8i4HsqVZnnJGCvPffydsH1FM4985d5YDctZ62n_bZsJxlpHdq0wVA1R6_R07FgjCDLSPAA" synopsys="In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy." rating="8.9" likes="2002"/>
        <Movie title="Top Gun" poster="https://www.gannett-cdn.com/-mm-/1aca93bc37febd983f059c66dc84b96d0210da8e/c=0-26-2419-3251/local/-/media/2016/05/13/USATODAY/USATODAY/635987003589248591-XXX-TOP-GUN-MOV-JY-0439-54171713.JPG" synopsys="In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy." rating="7.9" likes="786"/>
        <Movie title="The Mummy" poster="https://m.media-amazon.com/images/I/71mzr3TEyaL._AC_SY679_.jpg" synopsys="In the kingdom of Mahishmati, while pursuing his love, Shivudu learns about the conflict ridden past of his family and his legacy. He must now prepare himself to face his newfound arch-enemy." rating="6.9" likes="386"/>
      </div>
    </div>
  )
}

function Movie({title, poster, synopsys, rating, likes}){

  return(
    <div className="card">
        <div className="card-items">
          <h2 className="movie-title">{title}</h2>
          <img className="image" src={poster} alt={title}></img>
          <p>{synopsys}</p>
          <h4>Rating: {rating}</h4>
          <div className="rating">
            <button>❤️</button>
            <p>{likes}</p>
          </div>
        </div>
    </div>
    )
}




