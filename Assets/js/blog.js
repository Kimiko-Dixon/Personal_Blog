// Assigns Selected elements to a variable
const main = document.querySelector('main');
const backButton  = document.querySelector('#Back')

// Displays blog posts from local storage on page
function displayPosts()
{
    // Clears main
    main.innerHTML = ''

    // Creates new elements to display the posts and appends it to the page
    for(let i = 0; i < blogPostArray.length; i++)
    {
        const username = blogPostArray[i].username;
        const title = blogPostArray[i].title;
        const content = blogPostArray[i].content;

        const divEl = document.createElement('div');
        const titleEl = document.createElement('h5');
        const contentEl = document.createElement('p');
        const usernameEl = document.createElement('h6');

        titleEl.textContent = title;
        contentEl.textContent = content;
        usernameEl.textContent = `Posted by: ${username}`;

        divEl.appendChild(titleEl)
        divEl.appendChild(contentEl)
        divEl.appendChild(usernameEl)
        divEl.setAttribute('class', 'posts')
        main.appendChild(divEl);
    }

}

// Sends user to the index page
backButton.addEventListener('click', function()
{
    window.location.href = './index.html';
})

displayPosts()