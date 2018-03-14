    var slider = document.getElementById("slider");
        var slideArray = slider.getElementsByTagName("li");
        var slideMax = slideArray.length - 1;
        var curSlideNo = 0;
        var nextSlideNo = null;
        var fadeStart = false;
        var curSlideLevel = 1;
        var nextSlideLevel = 0;

        for (i = 0; i <= slideMax; i++) {
            if (i == curSlideNo) changeOpacity(slideArray[i], 1);
            else changeOpacity(slideArray[i], 0);
        }

        function startSlide(dir) {
            if (fadeStart === true) return;
            if (dir == "prev") {
        nextSlideNo = curSlideNo - 1;
    if (nextSlideNo < 0) nextSlideNo = slideMax;
            }
            else if (dir == "next") {
        nextSlideNo = curSlideNo + 1;
    if (nextSlideNo > slideMax) nextSlideNo = 0;
            }
            else {
        fadeStart = false;
    return;
            }
            fadeStart = true;
            changeOpacity(slideArray[curSlideNo], curSlideLevel);
            changeOpacity(slideArray[nextSlideNo], nextSlideLevel);
            fadeInOutAction(dir);
        }

        function fadeInOutAction(dir) {
        curSlideLevel = curSlideLevel - 0.1;
    nextSlideLevel = nextSlideLevel + 0.1;
            if (curSlideLevel <= 0) {
        changeOpacity(slideArray[curSlideNo], 0);
    changeOpacity(slideArray[nextSlideNo], 1);
                if (dir == "prev") {
        curSlideNo = curSlideNo - 1;
    if (curSlideNo < 0) curSlideNo = slideMax;
                }
                else {
        curSlideNo = curSlideNo + 1;
    if (curSlideNo > slideMax) curSlideNo = 0;
                }
                curSlideLevel = 1;
                nextSlideLevel = 0;
                fadeStart = false;
                return;
            }
            changeOpacity(slideArray[curSlideNo], curSlideLevel);
            changeOpacity(slideArray[nextSlideNo], nextSlideLevel);
            setTimeout(function () {
        fadeInOutAction(dir);
    }, 100);
        }

        function changeOpacity(obj, level) {
        obj.style.opacity = level;
    obj.style.MozOpacity = level;
            obj.style.KhtmlOpacity = level;
            obj.style.MsFilter = "'progid:DXImageTransform.Microsoft.Alpha(Opacity=" + (level * 100) + ")'";
            obj.style.filter = "alpha(opacity=" + (level * 100) + ");";
        }

   

    //drop down menu
            var dropdown = document.querySelectorAll('.dropdown');
        var dropdownArray = Array.prototype.slice.call(dropdown, 0);
        dropdownArray.forEach(function (el) {
            var button = el.querySelector('a[data-toggle="dropdown"]'),
                menu = el.querySelector('.dropdown-menu'),
                arrow = button.querySelector('i.icon-arrow');

            button.onclick = function (event) {
                if (!menu.hasClass('show')) {
                menu.classList.add('show');
            menu.classList.remove('hide');
                    arrow.classList.add('open');
                    arrow.classList.remove('close');
                    event.preventDefault();
                }
                else {
                menu.classList.remove('show');
            menu.classList.add('hide');
                    arrow.classList.remove('open');
                    arrow.classList.add('close');
                    event.preventDefault();
                }
            };
        })

        Element.prototype.hasClass = function (className) {
            return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
        };