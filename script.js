
// Hi Logan,
// This is just some example to get you started, in case you do need JS. :]
// You're going to have questions about this!
// You can send them to me at ej@machinelevel.com and I'll do my best.
// - ej

var all_internships = [
    { subject:'Astronomy', grade:'10', company_name:'Yoyodyne Propulsion Systems', company_info:'We build space vehichles with the goal of visiting Planet 10, real soon.'},
    { subject:'Finance', grade:'12', company_name:'Gringotts', company_info:'A bank with a roller coaster and magical deadly things.'},
    { subject:'Marine Biology', grade:'9', company_name:'Captain Nemo', company_info:'Spend an entire summer aboard the Nautilus.'},
];

function make_table(sort_by)
{
    console.log('sort by ' + sort_by); // You should see this get printed in the JS console.
    var sorted_list = all_internships;
    if (sort_by == 'subject')
    {
        sorted_list = all_internships.sort(function(a, b) { return a.subject.localeCompare(b.subject); });
    }
    else if (sort_by == 'grade')
    {
        sorted_list = all_internships.sort(function(a, b) { return a.grade - b.grade; });
    }
    console.log(sorted_list); // just to check it in the JS console.

    // This function fills in the table
    sstr = '<table>';
    sstr += '<tr> <th>Subject</th> <th>Company Name</th> <th>Grade</th> <th>Info</th> </tr>';
    var num_items = sorted_list.length;
    console.log('there are ' + num_items + ' items!'); // you can do this for debugging
    for (var i = 0; i < num_items; ++i)
    {
        var item = sorted_list[i];
        sstr += '<tr>';
        sstr += '<td>' + item.subject + '</td>';
        sstr += '<td>' + item.company_name + '</td>';
        sstr += '<td>' + item.grade + '</td>';
        sstr += '<td>' + item.company_info + '</td>';
        sstr += '</tr>';
    }
    sstr += '<table>';

    // Now we just pop that string into out HTML file!
    var my_table_span = document.getElementById('my_table');
    my_table_span.innerHTML = sstr;
}


// This function gets called when the page is loaded.
function do_when_page_loaded()
{
    console.log('Hi Logan!');  // This prints into the "JavaScript console" in your browser.
    make_table('subject');
}
document.onload = do_when_page_loaded();

