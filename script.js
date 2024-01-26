
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height=== '' || height<0 || isNaN(height)){
        results.innerHTML = `please Enter valid height ${height}`
    }
    if(weight=== '' || weight<0 || isNaN(weight)){
        results.innerHTML = `please Enter valid weight ${weight}`
    }
    else{
        const bmi = (weight/((height*height)/1000)).toFixed(2)

        // results.innerHTML= `<span>${bmi}</span>`

        if(bmi<18.6){
            // console.log("under weight")
            results.innerHTML= `<span>under weight ${bmi}</span>`
        }
        else if(bmi>=18.6 && bmi<=24.9){
            // console.log("Normal Range")
            results.innerHTML= `<span>Normal Range ${bmi}</span>`

        }
        else{
            // console.log("Over weight")
            results.innerHTML= `<span>Over weight ${bmi}</span>`

        }
    }
})
