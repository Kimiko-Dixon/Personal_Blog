// Assigns Selected elements to a variable
const usernameText = document.querySelector('#Username');
const titleText = document.querySelector('#Title');
const contentText = document.querySelector('#Content');
const themeClass = document.querySelector('.light')
const themeButton = document.querySelector('#Theme')

// Theme
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';
const LIGHT_THEME_SYMBOL = '☀';
const DARK_THEME_SYMBOL = '🌚';

// Stores and retrieves theme in local storage
let theme = localStorage.getItem('theme') || LIGHT_THEME;
localStorage.setItem('theme', theme)

// Retrieves previous blog posts 
const blogPostArray = JSON.parse(localStorage.getItem('blogPost')) || [];

// Stores the username, tiltle, and content in local storage 
function storeInformation(event)
{    
    event.preventDefault();

    // Object for form information
    const blogPostInfo = 
    {
        username: usernameText.value.trim(),
        title: titleText.value.trim(),
        content: contentText.value.trim()

    };

    // If all fields are not filled, display an error message
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
    // Else add object to the array, store in  local storage, clear the form, and then go to the blog page
    else
    { 

        blogPostArray.push(blogPostInfo);

        localStorage.setItem('blogPost', JSON.stringify(blogPostArray)); 
        clearForm()
        window.location.href = './blog.html';

    }

}

// Clears form
function clearForm()
{
    usernameText.value = '';
    titleText.value = '';
    contentText.value = '';
}

// Checks the theme and changes if it differs from local storage
function checkTheme()
{
    if (theme === LIGHT_THEME)
    {
        theme = LIGHT_THEME;
        themeButton.textContent = LIGHT_THEME_SYMBOL;
    }
    else
    {
        theme = DARK_THEME;
        themeButton.textContent = DARK_THEME_SYMBOL;
    }
    themeClass.setAttribute('class', theme);

}

// Changes theme
function changeTheme()
{
    if (theme === LIGHT_THEME)
    {
        theme = DARK_THEME;
        themeButton.textContent = DARK_THEME_SYMBOL;
    }
    else
    {
        theme = LIGHT_THEME;
        themeButton.textContent = LIGHT_THEME_SYMBOL;
    }
    localStorage.setItem('theme', theme)
    themeClass.setAttribute('class', theme);
}

// Changes theme when the theme button is clicked
themeButton.addEventListener('click',changeTheme);

