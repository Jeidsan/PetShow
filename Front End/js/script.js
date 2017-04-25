var breadcrumb = [];

function fillContent(name, link)
{
  breadcrumb.push([name, link]);
  $("#content").load("html/" + link + ".html", "", updateBreadcrumb);
}

function updateBreadcrumb()
{
    var content = "";
    for (var i = Math.min(5, breadcrumb.length) - 1; i >= 0 ; i--) {
      var item = breadcrumb[breadcrumb.length - i - 1];
      content += " <i class='fa fa-angle-right'></i> <a href=\"\" onClick=\"javascript:fillContent('" + item[0] +  "','" + item[1] + "');\">" + item[0] + "</a>";
    }

    $('#breadcrumb').html(content);
}
