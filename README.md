## Read Only 
a chrome extension that reads emails in order to look for rejections patterns that comes from jobs, grants and projects applications and takes over the emails with happy gifs and encouragements expressions. 
install plugin: 

![image1](https://i.imgur.com/MI8dsp7.png)
![image2](https://i.imgur.com/qz7faNq.png)
![image3](https://i.imgur.com/xSf9PL6.png)
![image4](https://i.imgur.com/OyXyTtb.png)

# Technology 
JavaScript, ReGex, WebPack, Giphy API.

# Code Snippet
the entire code is based on DOM manipulation - we are not storing, keeping or looking for any personal data, just tracking windows activities inside the Gmail inbox within unread emails, and then matching text patterns using ReGex.
```
for(let mutation of mutationsList) {
      if (mutation.type == 'childList') {
        emailTitles.forEach(title => {
          if (titleNode.innerText.includes(title)) {
            const body = document.body.innerText
            patterns.forEach(pattern => {
              if(!!body.match(pattern)) {
                console.log("ha ha you got rejected");
  ```
