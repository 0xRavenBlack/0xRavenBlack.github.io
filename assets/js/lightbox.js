/* Lightbox: click any image inside an article to open it larger, in-site. */
(function () {
    'use strict';

    var lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML =
        '<span class="lb-close" role="button" aria-label="Close">&times;</span>' +
        '<img alt="">' +
        '<div class="lb-caption"></div>';
    document.body.appendChild(lb);

    var lbImg = lb.querySelector('img');
    var lbCap = lb.querySelector('.lb-caption');
    var lbClose = lb.querySelector('.lb-close');

    function open(img) {
        lbImg.src = img.currentSrc || img.src;
        lbImg.alt = img.alt || '';
        lbCap.textContent = img.alt || '';
        lb.classList.add('open');
        document.documentElement.style.overflow = 'hidden';
    }

    function close() {
        lb.classList.remove('open');
        lbImg.removeAttribute('src');
        document.documentElement.style.overflow = '';
    }

    document.addEventListener('click', function (e) {
        var t = e.target;

        if (t.tagName === 'IMG' && t.closest('article .post-content')) {
            e.preventDefault();
            open(t);
            return;
        }

        if (lb.classList.contains('open') &&
            (t === lb || t === lbClose || t.closest('.lb-close'))) {
            close();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') close();
    });
})();