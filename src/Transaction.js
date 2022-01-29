import axios from 'axios';
import {useState} from "react";


 function Transaction(props){

    function onSubmit()
  {

    if(senderId== "")
    {
        setError("enter sender id")
    }
    else if(receiverId=="")
    {
        setError("enter Receiver id")

    }
    else if(amount === "")
    {
      setError("Enter Amount")
    }
    else if(amount <=0)
    {
        setError("amount should be greater than zero")
    }
    else
    {
      axios({
        method: 'post',
        url: "http://localhost:8080/transaction",
        headers: {}, 
        data: {
          senderId: senderId,
          receiverId: receiverId ,
          amountSent: parseInt(amount)
        }
      })
      .then((res) => {
         
            setError("");
            setSuccess("Successfully inserted with message : "+res.data.message);
          
      })
      .catch((err) => {
          setError("Failed to insert record : "+err)   
          setSuccess("")
      })
      }
  
  }
    const [senderId, setSenderId] = useState("");
    const [receiverId, setReceiverId] = useState("");
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    return (
        <div>
        <h1>
            Transaction
        </h1>
        <label class="col-sm-2 col-form-label col-form-label-sm">Sender id</label>
        <br></br>
        <input type="text" class="form-control form-control-sm" id="amount" placeholder="Sender " onChange={(e)=>{setSenderId(e.target.value)}}/>
        <br></br>
        <label for="inputEmail3" class="col-sm-2 col-form-label col-form-label-sm">Receiver id</label>
        <br></br>
        <input type="text" class="form-control form-control-sm" id="amount" placeholder="Receiver " onChange={(e)=>{setReceiverId(e.target.value)}}/>
        <br></br>
        <label for="inputEmail3" class="col-sm-2 col-form-label col-form-label-sm">Amount</label>
        <br></br>
        <input type="number" class="form-control form-control-sm" id="amount" placeholder="Amount " onChange={(e)=>{setAmount(e.target.value)}}/>
        <br></br>
        <button type="button" class = "btn btn-primary" onClick={onSubmit}>Submit</button> <br/><br/><br></br>
        {error && <p style={{color:"red"}}>{error}</p>}<br/>
        {success && <h4 style={{color:"green"}} >{success}</h4>}<br/><br/>
        </div>
    )
}

export default Transaction;