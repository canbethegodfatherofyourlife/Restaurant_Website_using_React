import React from 'react'
import "./style.css"
import Menu from "./manuApi"
import MenuCard from "./menuCard"
import Navbar from "./Navbar"
const uniqueList = [...new Set(Menu.map((currEle)=>{
    return currEle.category
})),
'All',
]

const Restuarant = () => {

    const [menuData,setMenuData] = React.useState(Menu)
    const [menuList,setMenuList] = React.useState(uniqueList)

    const filterItem = (category) => {
        if (category==="All"){
            setMenuData(Menu)
            return 
        }
        const updateList = Menu.filter( (currEle)=> {
            return currEle.category === category
        })
        setMenuData(updateList)
    }
    return (
        <div>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuD={menuData}/>
        </div>
    )
}

export default Restuarant
