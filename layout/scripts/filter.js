var select = document.getElementById("filter-select"); 
var items = document.getElementsByClassName("item");

select.addEventListener("change", function() {
    var selectedValue = this.value;
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        if (selectedValue === "all" || item.classList.contains(selectedValue)) {
            item.classList.remove("hidden");
        }else {
            item.classList.add("hidden");
        }
    }
});