function FeatureCards2(props) {
    const className= "FeatureCard2 level" +props.level 
    return (
      <div className={className}>
        <div>
          <img src={props.icon} alt="icon" className="w-[120px]"/>
          <h3>{props.title}</h3>
          <p className="">{props.text}</p>
        </div>
      </div>
    );
  }
  
  export default FeatureCards2;
  