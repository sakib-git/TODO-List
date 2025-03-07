const addbtn = document.getElementById('addbtn');
const inputF = document.getElementById('inputF');

addbtn.addEventListener('click', () => {

    inputFValue = inputF.value.trim();

    if(inputFValue !== ""){
        const dtext = document.getElementById('dtext');
        const p = document.createElement('p');
        p.innerHTML =  '<input type="checkbox">' + inputFValue + '<button onclick="dlt(this)"><i class="bx bx-trash"></i> </button>';
        dtext.appendChild(p);
        p.setAttribute ('class', 'ptag')
    
        inputF.value= '';
    
    }
    else{
        alert('please add a task')
    }
  
})

const dlt = (btn) => {
    const p = btn.parentNode;
    p.parentNode.removeChild(p)

}

const deleteTask = () => {
    const checkboxs = document.querySelectorAll('input[type="checkbox"]:checked')

    checkboxs.forEach(checkbox => {
        const p = checkbox.parentNode;
        p.parentNode.removeChild(p)
    })
}





