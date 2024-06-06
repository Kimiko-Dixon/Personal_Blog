const usernameText = document.querySelector('#Username');
const titleText = document.querySelector('#Title');
const contentText = document.querySelector('#Content');
const form = document.querySelector('form');


const blogPostArray = JSON.parse(localStorage.getItem('blogPost')) || [];

function storeInformation(event)
{    
    event.preventDefault();

    const blogPostInfo = 
    {
        username: usernameText.value.trim(),
        title: titleText.value.trim(),
        content: contentText.value.trim()

    };

    if(usernameText.value === '' || titleText.value === '' || contentText.value === '')
    {
       // create html element with a message to fill all fields and append above the submit button

        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Please fill out all fields';
        //errorMessage.setAttribute('style', `color: #b0000; background-color: #ff0000; border: .5em solid #b0000; ` )
        form.appendChild(errorMessage);
        
    }
    else
    { 

        blogPostArray.push(blogPostInfo);

        localStorage.setItem('blogPost', JSON.stringify(blogPostArray)); 
        //clearForm()
        window.location.href = './blog.html';

    }

}

function clearForm()
{
    usernameText = '';
    titleText = '';
    contentText = '';
}


