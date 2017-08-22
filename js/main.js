$(document).ready(() => {
    const magnify = $("#magnify");
    const search = $("#search");
    magnify.click(e => {
        magnify.hide();
        search.toggle("scale");
        search.css('display','block');
    });
})