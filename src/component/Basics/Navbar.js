import React from 'react'

const Navbar = ({filterItem,menuList}) => {
    return (
        <div>
            <nav className="navbar">
                <div className="btn-group">
                {
                    menuList.map( (curr)=>{
                        return (
                            <button onClick={()=>{filterItem(curr)}} className="btn-group__item">{curr}</button>
                        )
                    })
                }
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar
