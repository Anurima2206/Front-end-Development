function App() {
  const handleClickFunction=(e)=>{
    //console.log(e.target.value);
    const body=document.querySelector('body');
    body.style.background = getRandomColour();
    e.target.style.backgroundColor= getRandomColour();
  };

  function getRandomColour(){
    let letters= '0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
      color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
  }
  return (
    <>
    <div className="container">
    <h1>Random Background Color Changer</h1>
    <button className="btn" onClick={handleClickFunction}>Click Me</button>
    </div>
    </>
  );
}

export default App;
