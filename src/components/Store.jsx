import React, { useState} from "react";
import { data } from './data';
import IconSwitch from "./IconSwitch";
import CardsView from './CardsView';
import ListView from './ListView';

export default function Store() {
    const [state, setCount] = useState('view_list');
    const products = data;

    function onSwitch() {
        setCount(state === 'view_module' ? 'view_list' : 'view_module');
    }

        // icon — название иконки, которую хотим показать. Название иконки соответствует названию класса из библиотеки material icons. В нашем случае это либо view_list, либо view_module.
        // onSwitch() — обработчик события, который реагирует на нажатие пользователем на иконку.
        // Компоненту CardsView от Store мы передаём свойство cards — массив с данными, каждый элемент из которого затем уже отображается с помощью карточки товара ShopCard.
        // Компоненту ListView от Store мы передаём всего одно свойство items — массив с данными, каждый элемент из которого затем уже отображается с помощью ShopItem для товаров, которые мы хотим отобразить.
    return (
        <div className="main">
            <IconSwitch icon={state} onSwitch={onSwitch} />
            {state === 'view_module' ? <CardsView cards={products} /> : <ListView items={products} />}
        </div>
    )
}