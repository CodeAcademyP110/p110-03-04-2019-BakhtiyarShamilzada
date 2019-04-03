"use strict"
let userInput = document.querySelector('input.tagname');
let formBox = document.querySelector('.form-box');
userInput.onkeyup = function(e)
{
    let tagName = this.value.trim();
    
    if(e.keyCode === 9 || e.keyCode === 13)
    {
        
        if(tagName === '') return;
        
        const el = [...formBox.children].find(div => div.innerText === tagName);

        if(el !== undefined) return;

        let tag = document.createElement('div');
        tag.className = 'tag m-1 px-1 pr-3';
        tag.innerText = tagName;

        let close = document.createElement('span');
        close.className = 'pl-2';
        close.innerText = 'x';

        close.onclick = function()
        {
            this.parentElement.remove();
        }
        userInput.value = '';

        formBox.insertBefore(tag, userInput);
        tag.appendChild(close);
        
    }
    else if(e.keyCode === 27)
    {
        userInput.value = '';
    }
    else
    {
        const el = [...formBox.children].find(div => div.innerText === tagName);
        if(el !== undefined) return;
    }

}

