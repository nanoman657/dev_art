function generate_string(object_id_str)
{
    var i;
    for (i = 0; text =""; i < object_id_str.length, i++)
    {
        text = text + "\n${i + 1})" +  object_id_str[i] 
    }
    return text
}

function check_objects()
{
    // Get the object ids
    var object_list = document.getElementById("objects_raw").value;
    
    // Change the HTML object list
    document.getElementById("object_list").innerHTML = object_list;

    // Change the HMTL listed pathway title
    var path_title = document.getElementById("title").value
    document.getElementById("path_title").innerHTML = "Title: \"" + path_title + "\""

    // Create array from raw list of object ids
    var object_ids = object_list.split(',')

    // Check each object to make sure that it exists in the database (do later)

    // Add objects to the HTML list
    var object_array = generate_string(object_ids)
    document.getElementById("object_list").innerHTML = object_array;

}

