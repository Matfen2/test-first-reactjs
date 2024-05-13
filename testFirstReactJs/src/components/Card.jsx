import JS from '../assets/jsLogo.jpeg';
import ReactJs from '../assets/reactJsLogo.png';
import NextJs from '../assets/nextJsLogo.jpeg';

function Card() {
  const frameworks = [
    { name: "Javascript", pict: JS, site: "https://www.freecodecamp.org/news/learn-javascript-for-beginners/" },
    { name: "React Js", pict: ReactJs, site: "https://legacy.reactjs.org/docs/getting-started.html" },
    { name: "Next Js", pict: NextJs, site: "https://nextjs.org" },
  ]

  const listFrameworks = frameworks.map((frame, index) => (
    <div key={index} className='col-lg-4'>
      <div className='card'>
        <div className='card-body'>
          <img src={frame.pict} className='img-fluid w-100' alt={frame.site} />
          <button type='button' id='btnLearn'><a href={frame.site}>LEARN</a></button>
        </div>
      </div>
    </div>
  ))
  
  return (
    <div className='list'>
      {listFrameworks}
    </div>
  )
}

export default Card