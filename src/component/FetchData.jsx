import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Pagination } from 'antd';
import { Card } from 'antd';
import './FetchData.css'

export const FetchData = () => {

    const [starshipsData , setStarshipsData ] = useState([])
    const [currentPage , setCurrentPage ] = useState(1)
    const [count , setCount ] = useState(1)

    useEffect(() => {getStarshipData()},[currentPage])


    //------------------------------------ Fetch Data --------------------------------------------------->


    const getStarshipData = () => {
        axios.get(`https://swapi.dev/api/starships?page=${currentPage}`).then((res)=>{

            setStarshipsData(res?.data?.results)
            setCount(res?.data?.count)
        })
    }

    // console.log(starshipsData)
    // console.log(count)

    

    return(

        <>
            <h1>Starships Data</h1>

            <div className="contentDiv">
                {starshipsData.map((el)=>(

                  <Card style={{ width: 410 }}>
                    <p>Name : {el.name}</p>
                    <p>Model : {el.model}</p>
                    <p>Passengers : {el.passengers}</p>
                    <p>Length : {el.length}</p>
                    <p>Starship Class : {el.starship_class}</p>
                    <p>Manufacturer : {el.manufacturer}</p>
                  </Card>
                ))}
            </div>

            <Pagination onChange={(page)=> setCurrentPage(page)} defaultCurrent={currentPage} total={count} />
        </>
    )
}


