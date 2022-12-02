const validation=values=>{
  let errors={};
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!values.name){
    errors.name="Name is Required";
  }
  else if(values.name.length<3){
    errors.name="Name should be of minimum 3 characters";
  }
  if(!values.email){
    errors.email="Email is Required";
  }
  else if(reg.test(values.email)===false){
    errors.email="Email is Invalid";
  }
  return errors;
}
export default validation;