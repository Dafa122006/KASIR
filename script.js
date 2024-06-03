let total = 0;

function updatePrice() {
    const itemSelect = document.getElementById('item-select');
    const selectedOption = itemSelect.options[itemSelect.selectedIndex];
    const price = selectedOption.getAttribute('data-price');
    document.getElementById('item-price').value = price;
}

function addItem() {
    const itemSelect = document.getElementById('item-select');
    const selectedOption = itemSelect.options[itemSelect.selectedIndex];
    const itemName = selectedOption.textContent.split('-')[0].trim();
    const itemPrice = parseFloat(document.getElementById('item-price').value);

    if (itemPrice > 0) {
        const itemList = document.getElementById('item-list');

        const listItem = document.createElement('li');
        listItem.textContent = `${itemName} - Rp${itemPrice.toFixed(2)}`;
        itemList.appendChild(listItem);

        total += itemPrice;
        document.getElementById('total-price').textContent = total.toFixed(2);

        // Reset the selection
        itemSelect.selectedIndex = 0;
        document.getElementById('item-price').value = '';
    } else {
        alert('Silakan pilih barang.');
    }
}
