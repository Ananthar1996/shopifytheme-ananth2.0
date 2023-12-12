// Put your application javascript here
// faq page

const questionHeaders = document.querySelectorAll('.faq-page-question-header')

questionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        header.parentElement.classList.toggle("active");
    })
}) 