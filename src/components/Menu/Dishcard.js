import React from 'react';
import puri from '../../assests/puri.svg';
import Saturday_dish_2 from '../../assests/saturday_dish2.svg';
import Saturday_Dish_3 from '../../assests/Saturday_Dish_3.png';
import Saturday_Dish_4 from '../../assests/Saturday_dish_4.svg';
import Saturday_Dish_5 from '../../assests/Saturday_Dish_5.svg';
import Saturday_Dish_6 from '../../assests/Saturday_Dish_6.svg';
function DishCard({ dayListMenus , handleSelectIten, selectedish }) {
    const cardDetails = [
        {
            cardImage: puri,
            cardHeading: "Hot Puri",
            cardDesc: "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit"
        },
        {
            cardImage: puri,
            cardHeading: "Hot Puri",
            cardDesc: "Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit"
        },
    ]
    return (
        <>
            {dayListMenus?.map((val, i) => {
                return (
                    <div className={` ml-3 mr-3 ${(selectedish == val._id) ? "dish-card-active" : "dish-card"  }`} onClick={() =>handleSelectIten(val)}>
                        <div className="d-flex flex-column ">
                            <img src={val?.images[0]?.secure_url} alt={Saturday_dish_2} />
                            <p className="text-left ml-2 dish-card-heading">{val.name}</p>
                            <p className="text-left ml-2 dish-card-desc">{val.description}</p>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}
export default DishCard;