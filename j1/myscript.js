window.addeventlistener('keydown', function(e){
    console.log(e.keycode);
    
function playsound (e) {
        const audio = document.querySelector(`audio[data-key="${e.keycode}"]`)
        console.log(audio);
        if (!audio) return; //stop function from running all together
        audio.currentTime = 0 // rewind to the start
        audio.play(); 
        key.classList.add('playing');
}

    /*
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`)
    console.log(audio);
    if (!audio) return; //stop function from running all together
    audio.currentTime = 0 // rewind to the start
    audio.play(); 
    key.classList.add('playing');

    Try not to do
    setTimeout(function(){
    }, 0.07s)

    Better practice
    const keys = document.querySelectorAll('.key');
    keys.forEach (=> addEventListener('transitionend', removeTransition));

        Here we have to add this:
    function removeTransitionc(e) {
        console.log(e);
        if (e.propertyName !== 'transition') return; // skip it if it's not a transform
        console.log(e.propretyName);
        this.classList.remove('playing');
    }
    */

const key = document.querySelector(`.key[data-key="${e.keycode}"]`)
console.log (key)

window.addeventlistener('keydown', playsound);



});