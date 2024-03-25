let selectedRating = 0
function setRating(rating){
    document.getElementById('selectedRating').textContent = rating
}
function submitRating(){
    document.querySelector('.rating').style.display = 'none'
}

const ratingInput = document.querySelectorAll('.rating-input')

ratingInput.forEach(function(rating){
    rating.addEventListener('click',function(event){
        event.preventDefault()
        if(this.classList.contains('active')){
            this.classList.remove('active')
        } else { 
            this.classList.add('active')
        }
        
    })
})
