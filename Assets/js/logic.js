const usernameText = document.querySelector('#Username');
const titleText = document.querySelector('#Title');
const contentText = document.querySelector('#Content');
const themeClass = document.querySelector('.light')
const themeButton = document.querySelector('#Theme')

const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';
let theme = localStorage.getItem('theme') || LIGHT_THEME;
localStorage.setItem('theme', theme)

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
        const errorMessage = document.querySelector('#Error');
        errorMessage.textContent = 'Please fill out all fields';
        errorMessage.setAttribute('style', 
        `color: #842029;
        background-color: #f8d7da;
        border:.1em solid #f5c2c7;
        display: flex;
        justify-content:center;
        padding:.5em;
        font-size:15px;
        border-radius: .2em;
        height; 2em;
       align-items: center ` )
        
    }
    else
    { 

        blogPostArray.push(blogPostInfo);

        localStorage.setItem('blogPost', JSON.stringify(blogPostArray)); 
        clearForm()
        window.location.href = './blog.html';

    }

}

function clearForm()
{
    usernameText.value = '';
    titleText.value = '';
    contentText.value = '';
}

function checkTheme()
{
    if (theme === LIGHT_THEME)
        {
            theme = LIGHT_THEME;
        }
        else
        {
            theme = DARK_THEME;
        }
        themeClass.setAttribute('class', theme);
}

 function changeTheme()
{
    if (theme === LIGHT_THEME)
    {
        theme = DARK_THEME;

    }
    else
    {
        theme = LIGHT_THEME;
    }
    localStorage.setItem('theme', theme)
    themeClass.setAttribute('class', theme);
}

themeButton.addEventListener('click',changeTheme);

