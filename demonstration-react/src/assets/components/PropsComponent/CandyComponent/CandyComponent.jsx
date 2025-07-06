import './CandyComponent.css';

const CandyComponent = ({ name, description, price, imgSource, onAdd }) => {
    return (
        <div id='CandyComponent'>
            <img src={imgSource} alt={name} />
            <span>{name}</span>
            <span>{description}</span>
            <span>{price}</span>
            <button type='button' onClick={onAdd}>Colocar no saquinho</button>
        </div>
    );
};

export default CandyComponent;