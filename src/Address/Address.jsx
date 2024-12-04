import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Address(){
   const navigate =  useNavigate();
    const [user, setUser] = useState({userId:""});
    const [id, setId] = useState();
    const [addressData, setAddressData] = useState({
        
        addressLine1: '',
        addressLine2:'',
        city: '',
        state: '',
        zipCode:'',
        country:'',

        //customer : {cust}
    })
   

    useEffect(() => {
        // Retrieve data from session storage
        const storedData = localStorage.getItem("id");  
        setId(storedData);
       // console.log(storedData);
      //findCustomer();
        
      }, []);

    //  async function findCustomer(){
    //    var customer = await axios.get(`http://localhost:9090/address/${id}`);
    //     //setCust(customer);
    //     console.log(customer);
    //   }

    function handleInput(event) {
        setAddressData(prevData => {
            return {
                ...prevData,
                [event.target.name] : event.target.value
            }
        })        
    }
    async function submitAddress(event) {
        event.preventDefault();
        await axios.post(`http://localhost:8080/address/${id}`, addressData).then((response => {
        navigate('/');      
        }))
    }
    return(
        <>
         <h1>Address Details : </h1>
            <form onSubmit={submitAddress}>
                <div className="form-group">
                    <label>Address Line 1 : </label>
                    <input type="text" name="addressLine1" className="form-control" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label>Address Line 1  : </label>
                    <input type="text" name="addressLine2" className="form-control" onChange={handleInput} />
                </div>          
                <div className="form-group">
                    <label>City</label>
                    <input type="text" name="city" className="form-control" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label>State</label>
                    <input type="text" name="state" className="form-control" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label>Zipcode : </label>
                    <input type="text" name="zipCode" className="form-control" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <label>Country : </label>
                    <input type="text" name="country" className="form-control" onChange={handleInput} />
                </div>
                
                <button className="btn btn-primary" >Add Address</button>
            </form>
        </>
    )
}