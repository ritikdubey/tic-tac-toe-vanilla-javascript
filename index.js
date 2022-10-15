function move(e){
    // alert(e)
    console.log(e.target.attributes.id.value)
    const div = document.getElementById(e.target.attributes.id.value);
    // alert(div)
    div.classList.add('red')
}