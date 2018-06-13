function generate_string(object_id_str)
{
    var i = 0;
    var text = ""
    for (i = 0; i < object_id_str.length; i++)
    {
        text += `${i + 1})` +  object_id_str[i] + "<br>"  // Append to the text
    }
    return text
}

function check_objects(submit_path)
{    
    // Get the object ids
    var object_list = document.getElementById("objects_raw").value;
    
    // Change the HTML object list
    document.getElementById("object_list").innerHTML = object_list;

    // Change the HMTL listed pathway title
    var path_title = document.getElementById("title").value
    document.getElementById("path_title").innerHTML = "Your Title: \"" + path_title + "\""

    // Create array from raw list of object ids
    var object_ids = object_list.split(',')
    var object_list_num = object_ids
    var object_id_str = object_ids
    for (var i = 0; i<object_list_num.length; i++){object_list_num[i] = parseInt(object_list_num[i])}   // Convert list to integers
    
    // Check if object is a valid number 
    var errors = 'Errors:<br>'
    for (var i =0; i<object_list_num.length; i++){
        if (isNaN(object_list_num[i])){
            errors = errors + '"' + object_list[i] + '" was converted to ' + object_list_num[i] + ', which is not a number'+ '<br>'   // Note the NaN error
        }
    }
    document.getElementById("errors").innerHTML = errors;    // Update errors listed in HTML

    // Check each object to make sure that it exists in the database (do later)

    // Add objects to the HTML list
    var object_array = generate_string(object_ids)
    document.getElementById("object_list").innerHTML = object_array;
    if (submit_path){
        send_path(object_ids)
    }
    

}

function send_path(object_ids)
{
    // Get the developer login
    var dev_login = document.getElementById("passcode").value
    
    var path_title = document.getElementById("title").value

    // Create data payload
    var data = "json_name=" + JSON.stringify({Dev_Login: dev_login,  Path_Title: path_title, Object_IDs: object_ids})    // Stringify data in JSON format
    var yourUrl = 'http://127.0.0.1:8080/newpath'              // Specify url - LOCAL DEV URL!!!!
    var xhr = new XMLHttpRequest();                             // Make new request for sending data
    
    // Send data to server
    xhr.open("POST", yourUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(JSON.stringify(data));
    var body = xhr.response
    console.log(body)
}
