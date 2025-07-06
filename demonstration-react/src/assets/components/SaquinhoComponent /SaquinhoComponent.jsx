import { TbPaperBag } from 'react-icons/tb';
import './SaquinhoComponent.css';
import candies from '../../constants/candies';

const SaquinhoComponent = ({ list }) => {
    return (
        <div id='SaquinhoComponent'>
            <TbPaperBag color='darkgoldenrod' size={'4rem'} />
            <div className='overlay'>{list?.length ? <ul>{
                list.map((candy, i) => {
                    return (
                        <>
                            <li key={i}>{candies.find(c => c.id === candy).name}</li>   
                            <hr />
                        </>
                    )
                })}</ul> : 
                <>Por enquanto nada aqui...</>}</div>
        </div>
    );
};

export default SaquinhoComponent;