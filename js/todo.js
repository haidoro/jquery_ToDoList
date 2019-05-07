var todoList = $('#todoList');
var todoItem = $('#item');


$('#addItem').on('click',function(){ 
  if(todoItem.val() === "") return;
  var todoItems = todoItem.val();
  $('<li></li>')
    .append('<input type="checkbox" class="myChange"><span>' + todoItems + '</span><button class="deleteItem">Delete</button>')
        .appendTo(todoList);
  todoItem.val("");
})

todoList.on('change','.myChange',function(e){
  $(this).siblings('span').toggleClass('done');
 e.stopPropagation();
})
todoList.on('click','.deleteItem',function(e){
  $(this).parent().remove();
  console.log($(this).index())
  todoItems[$(this).index()] = '';
  e.stopPropagation();
})
