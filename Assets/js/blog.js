const main = document.querySelector('main');

function displayPosts()
{
    main.innerHTML = ''

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
        usernameEl.textContent = username;

        divEl.appendChild(titleEl)
        divEl.appendChild(contentEl)
        divEl.appendChild(usernameEl)
        main.appendChild(divEl);
    }

}

displayPosts()