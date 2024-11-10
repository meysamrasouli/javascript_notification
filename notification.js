//notification('your file has been added', 'success');

/**
 * notification main function
 * @param { string } message
 * @param { string } mode - ''|success|warning|error
 * @param { int } lifeSpan 
*/
function notification(message, mode = '', lifeSpan = 3){
    // map mode to css class
    let liClass = (['success','warning','error'].includes(mode)) ? mode : 'normal'

    // create a li(notificaton)
    let li = document.createElement('li')
    li.classList.add('notif-' + liClass)
    li.classList.add('bounceInRight')

    // create lifespan
    let divLifespan = document.createElement('div')
    divLifespan.classList.add('notif-lifespan')
    divLifespan.setAttribute('style','animation-duration: '+lifeSpan+'s')
    li.appendChild(divLifespan)

    // create notification text
    let divText = document.createElement('div')
    divText.classList.add('notif-text')
    divText.innerHTML = message
    li.appendChild(divText)

    // get ul#nofitication
    let ul = ulMaker()
    ul.appendChild(li)

    // remove notification after certain time
    removeLi(ul, li, lifeSpan)
}

/**
 * find ul#notification or make one if there is none
 * @function ulMaker
*/
function ulMaker(){
    // search for ul#notification
    let ul = document.getElementById('notification')
    if(ul) return ul

    // create ul#notification
    ul = document.createElement('ul')
    ul.setAttribute('id', 'notification')

    document.querySelector('body').appendChild(ul)
    return ul
}

/**
 * remove notification after certain time
 * @param { DOM } ul - DOM element of ul
 * @param { DOM } li - DOM element of li(notificaiton)
 * @param { int } lifeSpan - lifespan of notification
*/
function removeLi(ul, li, lifeSpan){    
    // hide the li(notification)
    setTimeout(function(){
        li.classList.remove('bounceInRight')
        li.classList.add('bounceOutRight')
    }, lifeSpan * 1000)

    // remove li(notification)
    setTimeout(function(){
        li.remove()
        
        // remove ul if there is not any li(notificaiton)        
        if(ul.querySelectorAll('li').length === 0) 
            ul.remove()
    }, (lifeSpan * 1000) + 500)
}




