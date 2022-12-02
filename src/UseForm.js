import { useState } from "react";
import { isObjEmpty } from "./utility";
import validation from "./Validation";

const UseForm=()=>{
    const [inputs, setInputs] = useState({});
    const [message, setMessage] = useState({});
    const [errors, setErrors] = useState({});
  
    const handleChange = (event) =>
      setInputs((prevInputs) => ({
        ...prevInputs,
        [event.target.name]: event.target.value,
      }));
  
    const handleForm = (event) => {
      event.preventDefault();
      isObjEmpty(validation(inputs))
        ? (function () {
            setMessage(() => ({
              name: inputs.name,
              email: inputs.email,
              additionalInfo:inputs.additionalInfo,
              toggle: true,
            }));
            setInputs({});
            setErrors({});
          })()
        : (function () {
            setErrors(validation(inputs));
            setMessage({});
          })();
    };
  
    const handleToggle = (prevMsg) => setMessage(!prevMsg.toggle);
    return {inputs,message,errors,handleChange,handleToggle,handleForm};
  
}
export default UseForm;