function display__notifications() {
    var style = document.getElementById('popover_divs').style.display;

    if (style == 'block') {
        document.getElementById('popover_divs').style.display = 'none';
    } else {
        document.getElementById('popover_divs').style.display = 'block';
        document.getElementById('noti__counter').innerHTML = '';
        document.getElementById('noti_body-list').innerHTML = '<li class="body-list__item-loader"></li>';
        var post_data = { method: "notification-list" };
        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var noti_html = '';
                var response = JSON.parse(this.responseText);
                if (typeof response.status !== 'undefined' && response.status == 1) {
                    document.getElementById('noti__counter').innerHTML = urldecode(response.counter);

                    if (typeof response.data !== 'undefined' && response.data.length > 0) {

                        var notification_data = response.data;
                        for (const ele of notification_data) {

                            if (typeof ele.title !== 'undefined') {
                                var title = ele.title;
                                var content = ele.content;
                                var date_ = ele.date_created;
                                var link = ele.link;

                                noti_html = noti_html + '<li class="body-list__item unread"><div class="title">' + title + '</div><div class="content">' + content + '</div><div class="date">' + date_ + '</div><a href="' + link + '" class="btn btn-xs btn-default"><span class="sr-only">Link</span><i class="fas fa-arrow-right"></i></a></li>';

                            }
                        }
                    } else {
                        noti_html = noti_html + '<li class="body-list__item unread"><div class="title">No new notifications</div><div class="content"></div><div class="date"></div></li>';
                    }
                }
                else {
                    noti_html = "<h2>Error.! reload page or contact administrator</h2>";
                }

                document.getElementById("noti_body-list").innerHTML = noti_html;
            }
        };
        xhttp.open("POST", "ajax_services_details", true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(JSON.stringify(post_data));
    }
}


function show_translate(){
    var e = document.getElementById("allow_refferal");
    var strUser = e.options[e.selectedIndex].value;
    if( strUser == '1' )
    {
        document.getElementById('refferal_text_div').style.display = 'block';
    }
    else
    {
        document.getElementById('refferal_text_div').style.display = 'none';
    }
}
