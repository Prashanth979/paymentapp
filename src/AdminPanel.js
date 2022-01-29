import axios from "axios";
import {useState,useEffect} from "react";

function AdminPanel(props)
{

    useEffect(() => {
              axios({
            method: 'get',
            url: "http://localhost:8080/details",
            headers: {}
          })
          .then((res) => {
              setData(res);
              isDone(true);
                console.log(res); 
          })
          .catch((err) => {
              isDone(true);
              setError("Unable to fetch data : "+err)   
          })
      },[]);
    
    function getData()
    {
          if(done && error === "")
          {
            return <div>
                <table>
                    <tr>
                        <th>
                            Customer id
                        </th>
                        <th>
                            In transaction
                        </th>
                        <th>
                            Out transaction
                        </th>
                        <th>
                            Risk
                        </th>
                    </tr>
               {/* {                
                   data.customers.map((single)=>{
                       return (
                           <tr>
                               <td>{single.id}</td>
                               <td>{single.in}</td>
                               <td>{single.out}</td>
                               <td>{single.risk}</td>
                           </tr>
                       )
                   })
               } */}
            </table>
            </div>
          }
          else if(!done)
          {
            return  <p>Loading..</p>
          }
     }
    const [error, setError] = useState("");
    const [done, isDone] = useState(false);
    const [data,setData] = useState("");
    return (
        <div>
            <h1>
                Admin Panel
            </h1>
            {getData()}
            {error && <p style={{color:"red"}}>{error}</p>}<br/>
        </div>
    )

}

export default AdminPanel;