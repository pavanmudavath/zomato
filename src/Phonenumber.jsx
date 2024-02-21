import { validatePhoneNumberLength } from "libphonenumber-js/min";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'


const Phonenumber = () => {

    const [phoneNumber,setPhoneNumber]=useState('');
    const [valid,setValid]=useState(true);

    const handleChange=(value)=>{
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    }
    const validatePhoneNumber=(phoneNumber)=>{
        const phoneNumberPattern=/^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber);
    }


  return (
    <div style={{marginTop:"15px",justifyContent:"center",display:"flex"}}>
        <label>
            <PhoneInput
             country='in'
             value={phoneNumber} 
             onChange={handleChange}
             inputProps={{
               required:true,
             }}
             
             />
        </label>
    </div>
  )
}

export default Phonenumber