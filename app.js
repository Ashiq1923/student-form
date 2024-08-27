let fullname =document.getElementById('fname')
let Email =document.getElementById('email')
const radios = document.getElementsByName('gender');
let education =document.getElementById('edu')
let discription =document.getElementById('discription')



function submit() {
    let fullname =document.getElementById('fname').value
    let Email =document.getElementById('email').value
    let education =document.getElementById('edu').value
    let discription =document.getElementById('discription').value
    const selectedGender = document.querySelector('input[name="gender"]:checked');
           
    
  

    if (selectedGender) {
        const genderValue = selectedGender.value;
  console.log(fullname ,Email,genderValue,education,discription);
    } 

}
submit()
    

   