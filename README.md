# A simple notification component with vanilla javascript

## About
This component consiste of CSS and JS files which you need no library to run.

## How to use
**STEP 1:**  move CSS and JS files into your project  
**STEP 2:**  call "notification()" function  
**STEP 3:**  put your **message** as **first parameter**, **mode** of notification as **second** and the **lifespan** of the notification as **third parameter**  
As simple as that :)

## Parameters
**Message (required):**  your notification message   
**Mode (optional):**  mode which is actually the color of the notification. normal:white(Default) | success:green| error:red | warning: orange   
**Lifespan (optional):**  lifespan of notification. the default value is 3 second

## Examples
notification("Hello World") - *notification with **normal** mode and **3** second lifespan*   
notification("Hello World", "success") - *notification with **success** mode and **3** second lifespan*   
notification("Hello World", "success", 5) - *notification with **success** mode and **5** second lifespan*   



