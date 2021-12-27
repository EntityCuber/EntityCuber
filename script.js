$(document).ready(function () {

    // Hover/Click slide up and down
    slide_duration = 430;

    $(".box1, .box1-panel").unbind().hover(function () {
        $(".box1-panel").slideDown(slide_duration);
        $(".box2-panel").slideUp(slide_duration);
        $(".box3-panel").slideUp(slide_duration);
        $(".box4-panel").slideUp(slide_duration);

        $(".box1-panel").animate({ opacity: 1 }, 100);

        $(".box2-panel").css({ opacity: 0 }, 100);
    });

    $(".box2").unbind().hover(function () {
        $(".box2-panel").slideDown(slide_duration);
        $(".box1-panel").slideUp(slide_duration);
        $(".box3-panel").slideUp(slide_duration);
        $(".box4-panel").slideUp(slide_duration);

        $(".panel").css({ opacity: 0 }, 100);
        $(".box2-panel").animate({ opacity: 1 }, 100);
    });


    $(".box3").unbind().hover(function () {
        $(".box3-panel").slideDown(slide_duration);
        $(".box1-panel").slideUp(slide_duration);
        $(".box2-panel").slideUp(slide_duration);
        $(".box4-panel").slideUp(slide_duration);

        $(".panel").css({ opacity: 0 }, 100);
        $(".panel").animate({ opacity: 1 }, 100);
    });

    $(".box4").unbind().hover(function () {
        $(".box4-panel").slideDown(slide_duration);
        $(".box1-panel").slideUp(slide_duration);
        $(".box2-panel").slideUp(slide_duration);
        $(".box3-panel").slideUp(slide_duration);

        $(".panel").css({ opacity: 0 }, 100);
        $(".box4-panel").animate({ opacity: 1 }, 100);
    });

    // Project Gallery



    var project_array = [
        `<a href="https://play.google.com/store/apps/details?id=com.entitydev.wallhavener"  target="_blank" rel="noopener noreferrer">
        <img height="80px" src="icons/wallhavener.png">
        </a>
        <b>Wallhavener</b>
        Wallpaper App using Flutter and wallhaven.cc API`,

        `<a href="https://askit.netlify.app"  target="_blank" rel="noopener noreferrer">
        <img height="80px" src="icons/askit.png">
        </a>
        <b>Askit</b>
        Survey conducting website using Firebase Database`,

        `<a href="https://clipper.netlify.app"  target="_blank" rel="noopener noreferrer">
        <img height="80px" src="icons/clipper.png">
        </a>
        <b>Clipper</b>
        Public clipboard website for sharing texts/links online`,
    ]

    var project_index = 0;

    $(".project-card").html(project_array[0]) // default project

    function prevProject() {
        if (project_index > 0) {
            project_index = project_index - 1;
        }
        else {
            project_index = project_array.length - 1;
        }
    }

    function nextProject() {
        if (project_index < project_array.length - 1) {
            project_index = project_index + 1;
        }
        else {
            project_index = 0;
        }
    }

    $(".button-prev").click(function () {
        prevProject();
        indexIndicator()
        $(".project-card").html(project_array[project_index])
    });

    $(".button-next").click(function () {
        nextProject();
        indexIndicator()
        $(".project-card").html(project_array[project_index])
    });

    // Index Indicator

    indexIndicator() // default Indicator

    function indexIndicator() {
        circleOutline = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"> <path fill="#202020" d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" /> </svg>`;
        circleFilled = `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><circle fill="#202020" cx="12" cy="12" r="12"/></svg>`;
        indicatorHtml = ''

        for (let i = 0; i < project_array.length; i++) {
            if (i == project_index) {
                indicatorHtml += circleFilled;
            }
            else {
                indicatorHtml += circleOutline;
            }
        }

        $(".index-indicator").html(indicatorHtml);

    }

});