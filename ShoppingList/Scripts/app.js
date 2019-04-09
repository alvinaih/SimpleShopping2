var currentList = {};

function createShoppingList()
{
    currentList.name = $("#shoppingListName").val();
    currentList.items = new Array();


    showShoppingList();
}

function showShoppingList()
{
    $("#shoppingListTitle").html(currentList.name);
    $("#shoppingListItems").empty();

    $("#createListDiv").hide();
    $("#shoppingListDiv").show();
}

function addItem()
{
    var newItem = {};
    newItem.name = $("#newItemName").val();
    currentList.items.push(newItem);
    console.info(currentList);
    showItems();
    $("#newItemName").val("");

}

function showItems()
{
    var $list = $("#shoppingListItems").empty();

    for (var i = 0; i < currentList.items.length; i++)
    {
        var currentItem = currentList.items[i];
        var $li = $("<li>").html(currentItem.name).attr("id", "item_" + i);
        var $deleteBtn = $("<button onclick='deleteItem(" + i + ")'>D</button>").appendTo($li);
        var $checkBtn = $("<button onclick='checkedItem(" + i + ")'>C</button>").appendTo($li);
        $li.appendTo($list);
     
     
    }
}

function deleteItem()
{

    //
    currentList.items.splice(index, 1);
    showItems();

}

function checkedItem(index)
{

    //unique identifier we added earlier in the deleteBTN onclick method
    $("#item_" + index).addClass("checked");

}


$(document).ready(function ()
{
    console.info("ready");

});