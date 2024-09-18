function hideSubmitButton() {

    var ready_to_submit = false;
    //counter++;
    //if(counter >= 30) clearInterval(refreshIntervalId);
    //console.log("hideSubmitButton : " + counter);

    // find the total score max
    var total_scores = querySelectorAllInIframes('div.h5p-interactive-book-summary-score-progress  span.absolute-value');
    //console.log(total_scores);

    for (const score of total_scores) {
        var score_got = score[0].innerText;
        var score_max = score[1].innerText;

        if(score_got === score_max){
            ready_to_submit = true;
        }

    var elements = querySelectorAllInIframes('.h5p-interactive-book-summary-submit');
   // console.log(elements);

    for (const button of elements) {
        if(ready_to_submit == false) {
            button[0].style.display = 'none';
        }
        else{
            button[0].style.display = 'inline-flex';
        }

    }

    }
}

//let counter = 0;
var refreshIntervalId = setInterval(hideSubmitButton, 1000);
hideSubmitButton();

function querySelectorAllInIframes(selector) {
    let elements = [];

    const recurse = (contentWindow = window) => {
        const iframes = contentWindow.document.body.querySelectorAll('iframe');
        iframes.forEach(iframe => recurse(iframe.contentWindow));

       // console.log("Looking for selector : " + selector);
        const found = contentWindow.document.body.querySelectorAll(selector);

       // console.log(found);
        if(found.length > 0){
            elements = elements.concat(found);
        }

        //elements = elements.concat(contentWindow.document.body.querySelectorAll(selector));

    }

    recurse();
    return elements;
};
