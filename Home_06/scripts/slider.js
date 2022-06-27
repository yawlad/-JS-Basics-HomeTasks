function slider() {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = document.querySelector('.slider_container');
    const line = document.querySelector('.slider_line');
    const items = document.querySelectorAll('.slider_item');
    const prevButton = document.querySelector('.slider_prev');
    const nextButton = document.querySelector('.slider_next');
    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    nextButton.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow*itemWidth)/itemWidth;

        position = itemsLeft == 0 ? 0 : position;
        position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
    });

    prevButton.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;

        position = itemsLeft == 0 ? -(itemsCount-1) * itemWidth : position;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth; 
        setPosition();
    });

    const setPosition = () => {
        line.style.transform = `translateX(${position}px)`;
    };
}

slider();
