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
6. Now we try to wrap it around using the  `useState()` and try to complete the programs

7. Lost interest here may be check comments in app.js

