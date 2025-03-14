window.onscroll = () => {
    document.querySelectorAll('.items').forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 500;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            document.querySelectorAll('li a').forEach(links => {
                links.classList.remove('active');
                document.querySelector('a[href*=' + id + ']').classList.add('active');
            })
        };
    });
};
