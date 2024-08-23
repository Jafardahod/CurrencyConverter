import { useEffect, useState } from "react"

function useChangeamount(currfromConvert) {
    let [amount, setAmount] = useState({})
    let [options, setOptions] = useState([])


    useEffect(() => {

        if (currfromConvert) {

            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currfromConvert}.json`)
                .then((predata) => predata.json())
                .then((data) => {
                    setAmount(data[currfromConvert])
                    setOptions(Object.keys(data[currfromConvert]))
            })
        }
    }, [currfromConvert])


    return [amount, options]



}


export default useChangeamount