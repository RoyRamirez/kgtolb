export default function convert(weight, conversion){
  if(conversion == "kg->lb"){
    let lb = weight * 2.20462;
    return lb + " Pounds";
  }
  else if(conversion == "lb->kg"){
    let kg = weight * 0.453592;
    return kg + " Kilograms";
  }
  else
    return "Invalid conversion";
}
