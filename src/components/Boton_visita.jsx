const Boton_visita = ({url}) => {
    const handleClick = ()=>{
        window.open(url)
        }
  return (
    <div>
      <button className="btn btn-primary"
        onClick={()=>handleClick()}>
        <h3>Visitar</h3>
      </button>
    </div>
  );
};

export default Boton_visita;
