
$("#add_user").submit(function(event){
    alert("Data Inserted Successfully !");
})

$("#update_user").submit(function(event){
    event.preventDefault();

    let unindexed_array = $(this).serializeArray();
    let data = {}
    $.map(unindexed_array,function(n,i){
       data[n['name']]=n['value']; 
    })

    console.log(unindexed_array);

    let request = {
        "url": `http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("Data Updated successfully")
    })
})