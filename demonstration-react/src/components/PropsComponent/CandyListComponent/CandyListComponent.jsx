import './CandyListComponent.css';
import CandyComponent from '../CandyComponent/CandyComponent';
import { useEffect, useState } from 'react';
import candies from '../../../constants/candies';
import SaquinhoComponent from '../../SaquinhoComponent /SaquinhoComponent';

const CandyListComponent = () => {
    const [candyList, setList] = useState([]);

    useEffect(() => {
        const candy = candies.find(c => c.id == candyList[candyList.length - 1]);
        if (!candy) return;
        alert(`Colocamos ${candy.name} no saquinho.`);
    }, [candyList])

    return (
        <div id='CandyListComponent'>
            <div>
                <h1>Lista de Doces</h1>
                <SaquinhoComponent list={candyList} />
            </div>
            <ul>
                {candies.map((candy, i) => (
                    <li key={i}>
                        <CandyComponent
                            onAdd={() => setList(l => {
                                const newList = [...l, candy.id];
                                return newList;
                            })} 
                            name={candy.name} 
                            description={candy.description} 
                            price={'R$ ' + candy.price} 
                            imgSource={candy.imgSource} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CandyListComponent;