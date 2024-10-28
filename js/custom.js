/* version = 2024092001 */
function hideSubmitButton() {

    var ready_to_submit = false;
    var total_scores = querySelectorAllInIframes('div.h5p-interactive-book-summary-score-progress  span.absolute-value');

    for (const score of total_scores) {
        var score_got = score[0].innerText;
        var score_max = score[1].innerText;

        if (score_got === score_max) {
            ready_to_submit = true;
        }
    }


    var elements = querySelectorAllInIframes('.h5p-interactive-book-summary-submit');

    for (const button of elements) {
        if(ready_to_submit == false) {
            if(button[0].dataset.submit !== 'N') {
                button[0].dataset.submit = 'N';
                button[0].innerHTML = "Check! You have missed something.<span class=\"icon-paper-pencil\" aria-hidden=\"true\"></span>";
                button[0].style.backgroundColor = "#dc3545";
                button[0].style.border = "1px solid #dc3545";
                button[0].disabled = true;
            }
        }
        else{
            if(button[0].dataset.submit !== 'Y') {
                button[0].dataset.submit = 'Y';
                button[0].innerHTML = "Well done! Press this submit button.<span class=\"icon-paper-pencil\" aria-hidden=\"true\"></span>";
                button[0].style.backgroundColor = "#198754";
                button[0].style.border = "1px solid #198754";
                button[0].disabled = false;
                }
            }
        }
}


function querySelectorAllInIframes(selector) {
    let elements = [];

    const recurse = (contentWindow = window) => {
        try {
            const iframes = contentWindow.document.body.querySelectorAll('iframe');
            iframes.forEach(iframe => recurse(iframe.contentWindow));

            const found = contentWindow.document.body.querySelectorAll(selector);
            if (found.length > 0) {
                elements = elements.concat(found);
            }
        }
        catch (err){
          //  console.log("Error happened" + JSON.stringify(err));
        }
    }

    recurse();
    return elements;
};

var refreshIntervalId = setInterval(hideSubmitButton, 1000);
hideSubmitButton();
