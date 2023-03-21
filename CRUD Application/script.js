var selectedRow = null;
function onFormSubmit(e)
{
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null)
    {
        insertNewRecord(formData);
    }
    else
    {
        updateRecord(formData)
    }
    resetForm();
}

// Read operation using this function
function readFormData()
{
    var formData = {};
    formData["username"] = document.getElementById("uname").value;
    formData["mobilenumber"] = document.getElementById("mobnum").value;
    formData["email"] = document.getElementById("eid").value;
    formData["address"] = document.getElementById("address").value;
    return formData;
}

// Create operation
function insertNewRecord(data)
{
    var table = document.getElementById("userdetails").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.username;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.mobilenumber;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.email;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.address;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm()
{
    document.getElementById('uname').value = '';
    document.getElementById('mobnum').value = '';
    document.getElementById('eid').value = '';
    document.getElementById('address').value = '';
    selectedRow = null;
}

// For Edit operation
function onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById('uname').value = selectedRow.cells[0].innerHTML;
    document.getElementById('mobnum').value = selectedRow.cells[1].innerHTML;
    document.getElementById('eid').value = selectedRow.cells[2].innerHTML;
    document.getElementById('address').value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData)
{
    selectedRow.cells[0].innerHTML = formData.username;
    selectedRow.cells[1].innerHTML = formData.mobnum;
    selectedRow.cells[2].innerHTML = formData.eid;
    selectedRow.cells[3].innerHTML = formData.address;
}
function onDelete(td)
{
    if(confirm('Are you sure you want to delete this record?'))
    {
        row = td.parentElement.parentElement;
        document.getElementById('userdetails').deleteRow(row.rowIndex);
        resetForm();
    }    
}

