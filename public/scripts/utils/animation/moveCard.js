export default function moveCard() {
    window.onload = function() {
        const container = document.getElementById('cards-container');

        const items = container.children;

        const middleItemIndex = Math.floor(items.length / 2);

        const middleItem = items[middleItemIndex];

        container.scrollLeft = middleItem.offsetLeft - (container.offsetWidth / 2) + (middleItem.offsetWidth / 2);
    }
}

moveCard();