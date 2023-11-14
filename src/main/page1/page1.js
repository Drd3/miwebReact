import {useEffect, useState} from 'react'

const Page1 = () => {
    const [name, setName] = useState("Hola")

    useEffect(() => {
        setName("hola 2")
    },[])

    return(
        <>
            <h1>{name}</h1>
        </>
    )
}


export default Page1