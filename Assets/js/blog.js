const main = document.querySelector('main');

function displayPosts()
{
    main.innerHTML = ''

    const blogPostInfo = localStorage.getItem(JSON.parse('blogPost'))
    console.log(JSON.parse(localStorage.getItem('blogPost')));

    for(const post of blogPostInfo)
    {
        const username = blogPostInfo.username;
        
        //const title = 
       // const content = 
    }
}
