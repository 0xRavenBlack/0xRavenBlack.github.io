/* Lightbox: click any image inside an article to open it larger, in-site. */
(function () {
    'use strict';

    /* Group consecutive article images two-per-row (client-side, so it works
       even when the GitHub Pages build runs with plugins disabled). */
    function groupImageRows() {
        document.querySelectorAll('#posts article .post-content').forEach(function (content) {
            var wraps = Array.prototype.filter.call(content.children, function (child) {
                return child.nodeType === 1 && child.tagName === 'P' &&
                       child.children.length === 1 &&
                       child.children[0].tagName === 'IMG' &&
                       !child.closest('.img-row');
            });
            if (wraps.length >= 2) {
                for (var i = 0; i < wraps.length; i += 2) {
                    var a = wraps[i];
                    var b = wraps[i + 1];
                    var row = document.createElement('div');
                    row.className = 'img-row' + (b ? '' : ' img-row--single');
                    a.parentNode.insertBefore(row, a);
                    row.appendChild(a);
                    if (b) row.appendChild(b);
                }
            }

            content.querySelectorAll('img').forEach(function (img) {
                if (!img.hasAttribute('loading')) {
                    img.setAttribute('loading', 'lazy');
                    img.setAttribute('decoding', 'async');
                }
            });
        });
    }

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

    groupImageRows();
})();