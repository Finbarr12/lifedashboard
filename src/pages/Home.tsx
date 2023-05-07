import React from 'react';
import {useQuery, useMutation} from "@tanstack/react-query";
import { fetchDictionary, postUser } from '../utils/api';
import { iUser } from '../types';


const Home = () => {

    const {data} = useQuery({
        queryKey: ["dictionary"],
        queryFn: fetchDictionary,
    })

    console.log("mydata", data)

    // const id = "geuaiuijkd"
    // const wallet = "snd7wiujrol"

    // const {mutate, isLoading}= useMutation({

    //     mutationFn: (data : iUser) => postUser(data, id, wallet)
    // })

  return (
    <div>
        <h4>Home</h4>

        {data?.list?.map((props:any) => (
            <p>{props?.definition}</p>
        ))}

    </div>
  )
}

export default Home