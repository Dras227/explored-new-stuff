# Trying out hands with react


### Ex 11 -Live challenge
1. use input element and try  ```onChange``` event.

2. console the value which user is typing 
3. Update the value using ```useState()``` 
4. Now consume this value in ```view```
### solution

1. Add this in react  

```html
    <input onChange = {inputChangeHandler}>
    </input>
```
2. May this input could use some of your style skills

3. What i want is whenever i type something in the input box, it should show up in the console. To do that we need a event handler.

4. So what we do?? We say `onChange` becuase we are not clicking `onClick` here.
So here the `event` is changin in the `input ` box value.  

5. Define the function to be called on onChange
```js
fucntion inputChangeHandler()
{
    // with event.target.value we can access the value of the calling event
    console.log(event.target.value);
}
```
6. Now we try to wrap it around using the  `useState()` and try to complete the programs.
useState() renders the new value to the viewport whenever the variable it mapped is changes. So the value is always consistend and will never be outdated.

<hr>

## Dictionary and mapping 

So far we understood how to create a changeable variable in the viewport using useState().

In order to create a emoji meaning teller app we have to store the emoji and its meaing in the dictionary.

And also the user cannot input emoji and has to select the emoji.

so we have to display the emojis what we have and we have to make it clickable.

**Tasks here**
---

 **Task 1. displaying all the emojis in the dictionry to the viewport**          
1. To display the emojis i.e. all the keys of the dictionary 
  first we have to have a array of keys.And we have to do this outside of `return
  ` in the app.js
  ```js
  var emojiArray = Object.keys(emojiObject);
  ```
  2. We can display all elements in array using map() associated with an arrow function which can be used to return html rendered elements to viewports. 
  The below example will make it clear.
    This code has to be wrapped around `{}` which is inserted inside `return` in app.js 
  ```js
  
  {
    emojiArray.map(() => emoji
    {
        return <span>{emoji}</span>
    })
  }
  ```
  The above code simply returns all keys present in dictionary without any styles.

  3. To add some stylings to the things which will render in viewports, we have to add some styling html element present in react app.
  For example to we will some padding and increase font size of emojis. 
  ```js
  
  {
    emojiArray.map(() => emoji
    {
        return <span style={{padding:"2rem",font-size:"30px"}}>{emoji}</span>
    })
  }
  ```

  *important things to notice here*
    
1. We dont simply add styles to the element.
    we have to use `styles=`
2. And styles that have to be applied are wrapped inside double `{{}}`
3. When there are two or more styles have to be added we can add using `,` one style after the other. 
More importantly **dont** use the another flower bracket to add another style to the same element 

**Task 2. Making all the emojis clickable**    

1. We can make this possible by adding a `onClick` property to the html element. 
Below is the example which makes every emoji clickable calls the function with respective emoji as the parameter.

```js
{
    emojis.map(emoji => {
        return <span 
        onClick={() => emojiClickHandler(emoji)} 
        styles = {{padding:"0.5rem",font-size:"20px",cursor:"pointer"}}> {emoji} </span>
    })

}
```

2. So whenever the emoji is clicked that emoji passed to the `emojiClickHandler(emoji)` function.
    - In this function we have to output the clicked emoji and its meaning to the viewport

```js
const [emoMeaning,setEmoMeainig] = useState("")
const [clickedEmoji,setClickedEmoji] = useState("")

function emojiClickHandler(emoji)
{
    setEmoMeaining(emojiObject[emoji])
    setClickedEmoji(emoji);
}

return (
    <div className="App">
       <h1>{clickedEmoji}</h1>
       <h1>{emoMeaning}</h1>

       {
         emojis.map(emoji => {
           return <span 
           onClick={()=>emojiClickHandler(emoji)}
           style={{fontSize:"1rem",padding:"0.5rem",cursor:"pointer"}}>{emoji}</span>
         })

         
       }
    </div>
  );