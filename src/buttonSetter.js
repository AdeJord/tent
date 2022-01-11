import React from 'react'

function buttonSetter() {

    const handleClick = () => {
        setShow(prevmenuShow => !prevmenuShow);
        console.log("Clicked", !show)
    }
    
    const [show, setShow] = useState(false);
    

    return (
        <div>
            To show or not to show
        </div>
    )
}

export default buttonSetter
