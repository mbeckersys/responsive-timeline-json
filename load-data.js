(function($) {
    $.fn.rcsTimeline = function(data, settings) {
        var timeline = this;
        var all_settings = $.extend({}, $.fn.rcsTimeline.defaults, settings);
        var translations = ($.fn.rcsTimeline.languages.hasOwnProperty(all_settings.language)) ? $.fn.rcsTimeline.languages[all_settings.language] : {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            msgEmptyContent: "No information to display."
        };
        // fetch JSON data
        if (typeof(data) == 'string') {
            data = $.parseJSON(data)
        }
        if ($.isEmptyObject(data)) {
            console.warn(translations.msgEmptyContent);
            return
        }
        
        if (all_settings.sorting) {
            data = data.sort(function(a, b) {
                // time might be format in "hh:mm-hh:mm" -> match first one
                tima = a['time'].match(/\d\d?:\d\d/g)[0]
                timb = b['time'].match(/\d\d?:\d\d/g)[0]
                dta = new Date(a['date'] + 'T' + tima + ":00Z")
                dtb = new Date(b['date'] + 'T' + timb + ":00Z")
                return (all_settings.sortDesc) ? dtb - dta : dta - dtb
            });
        }

        var timeline_menu_parent = $('<div>')
        timeline_menu_parent.append($('<h2>').text(all_settings.menuTitle))
        var timeline_menu = $("<ul>").attr("id", "timeline-menu");
        timeline_menu_parent.append(timeline_menu)

        // for each entry...
        $.each(data, function(dateobj, jsonentry) {
            var today = new Date(jsonentry.date)
            var uy = today.getFullYear();
            var um = today.getMonth()
            var ud = today.getDate()
            var h = uy + "_" + um + "_" + ud
            // find in which group is goes
            var this_group = $(timeline).find("div#grp" + h);
            if (this_group.length === 0) {
                // create new group
                this_group = $("<div>").attr("id", ("grp" + h)).addClass("frst-timeline frst-date-opposite frst-timeline-style-11 frst-left-align")
                strdate=fnDateFormat(today, all_settings.formatDate, translations);
                hdg=$("<h2>").addClass("daysep")
                hdg.append($('<a>').attr('name', 'day'+h).text(strdate))
                $(timeline).append(hdg);
                $(timeline).append(this_group);
                var j = $('<a>').attr("href", ("#day" + h)).text(strdate);
                timeline_menu.append($("<li>").append(j))
            }

            // create entry
            var div_dot = $('<div>').addClass("frst-timeline-img");
            div_dot.append($('<span>'));

            var block_content = $("<div>").addClass("frst-timeline-content animated zoomInRight");
            var article_text = $("<div>").addClass("frst-timeline-content-inner");

            // render elements of body
            article_text.append($('<span>').addClass('frst-date').text(jsonentry.time))
            article_text.append($('<span>').addClass('title-section').text(jsonentry.title))
            if (jsonentry.person) {
                article_text.append($('<p>').addClass('speaker').text(jsonentry.person))
            }
            cnt=$('<p>').addClass('content-section')


            $.each(jsonentry.body, function(translations, elem) {
                var e = $('<' + elem.tag + '>');
                $(elem.attr).each(function() {
                    $.each(this, function(a, format) {
                        (a.toLowerCase() === 'cssclass') ? e.addClass(format): e.attr(a, format)
                    })
                });
                if (elem.content) e.text(elem.content);
                cnt.append(e)
            });
            article_text.append(cnt)
            block_content.append(article_text);
            var block = $("<div>").addClass("frst-timeline-block").attr('data-animation', all_settings.effect);
            block.append(div_dot)
            block.append(block_content);
            block.appendTo(this_group)
            timeline.addClass('frst-container content-left-align')
        });
        var y = $('<div>').addClass("badge").html("&nbsp;");
        var z = $("<div>").addClass("panel").append(y);
        timeline.append($("<article>").append(z));
        timeline.append($("<div>").addClass("clearfix").css({
            "float": "none"
        }));
        // finally, hook into DOM
        if (all_settings.showMenu) {
            timeline_menu_parent.prependTo(timeline)
        }
    };
    $.fn.rcsTimeline.languages = {};
    $.fn.rcsTimeline.defaults = {
        effect: "fadeInUp",// slideInUp
        showMenu: true,
        language: "en-US",
        formatDate: 1,
        sortDesc: false,
        sorting : true,
        menuTitle: 'Overview'
    };

    function fnDateFormat(dateobj, format, translations) {
        var tag = ((dateobj.getDate() < 10 ? "0" : "") + dateobj.getDate());
        var m = ((dateobj.getMonth() < 10 ? "0" : "") + dateobj.getMonth());
        switch (format) {
            case 1:
                return tag + " " + translations.shortMonths[dateobj.getMonth()];
            case 2:
                return tag + "/" + m + "/" + dateobj.getFullYear();
            case 3:
                return tag + " " + translations.months[dateobj.getMonth()] + " " + dateobj.getFullYear();
            case 4:
                return translations.days[dateobj.getDay()].substring(0, 3) + ", " + tag + " " + translations.months[dateobj.getMonth()] + " " + dateobj.getFullYear();
            default:
                return dateobj.getFullYear() + "-" + m + "-" + tag
        }
    }
})(jQuery);
