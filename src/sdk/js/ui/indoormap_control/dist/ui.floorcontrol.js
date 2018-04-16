window.Rtmap ? "" : window.Rtmap = {};
(function () {
    var _htmlTemplate = '<div class="indoor-control-floor indoor-bar indoor-control" style="width: 35px;overflow: hidden;bottom: 20%;right: 20px;">' +
                          '<a class="control-floor-plus" href="javascript:;"></a>' +
                          '<div class="control-floor-warp">' +
                          '<div id="floorlist" class="control-floor-list radius-no" style="height: 108px; margin-top: 0px;width: 55px;overflow-x: hidden;overflow-y: scroll;">' +
                          '</div>' +
                          '</div>' +
                          '<a class="control-floor-minus" href="javascript:;"></a>' +
                          '</div>';
    var $jqDom = $(_htmlTemplate);
    var $parentDom = null;
    var _bInit = false;
    var $floorListDom = $jqDom.find("#floorlist");
    var $focusItemDom = null;
    var _floorItems = [];
    var _floorDomItems = [];
    var _floorClickCallback = null;
    var _defaultFloor = "F1";

    function _init() {
        $parentDom ? $jqDom.appendTo($parentDom) : $jqDom.appendTo('body');
        _bInit = true;
        $jqDom.find('.control-floor-plus').on('click', function (e) {
            event.stopPropagation();
            event.preventDefault();
            for (var i = 0; i < _floorItems.length; i++) {
                if ($focusItemDom.data("floor") == _floorItems[i].floor) {
                    if (i > 0) {
                        var floorName = _floorItems[i - 1].floor;
                        if (floorName.indexOf(".") > 0) {
                            floorName = floorName.replace(".", "_");
                        }
                        _focusFloorItem($floorListDom.find("#floorItem_" + floorName));
                        _scrollTo(floorName);
                        if (i == 1) {
                            $jqDom.find('.control-floor-plus').addClass("indoor-disabled");
                        }
                        if (i = _floorItems.length - 1) {
                            $jqDom.find('.control-floor-minus').removeClass("indoor-disabled");
                        }
                        break;
                    }
                }
            }
        });
        $jqDom.find('.control-floor-minus').on('click', function (e) {
            event.stopPropagation();
            event.preventDefault();
            for (var i = 0; i < _floorItems.length; i++) {
                if ($focusItemDom.data("floor") == _floorItems[i].floor) {
                    if (i < _floorItems.length - 1) {
                        var floorName = _floorItems[i + 1].floor;
                        if (floorName.indexOf(".") > 0) {
                            floorName = floorName.replace(".", "_");
                        }
                        _focusFloorItem($floorListDom.find("#floorItem_" + floorName));
                        _scrollTo(floorName);
                        if (i == _floorItems.length - 2) {
                            $jqDom.find('.control-floor-minus').addClass("indoor-disabled");
                        }
                        if (_floorItems.length > 1) {
                            $jqDom.find('.control-floor-plus').removeClass("indoor-disabled");
                        }
                        break;
                    }
                }
            }
        })

        $floorListDom.bind("mousewheel", function (event) {
            event.stopPropagation();
        });
        $floorListDom.bind("touchstart", function (event) {
            event.stopPropagation();
        });
        $floorListDom.bind("touchmove", function (event) {
            event.stopPropagation();
        });
        $floorListDom.bind("touchend", function (event) {
            event.stopPropagation();
        });
    }

    function _show(callback,floorItems,option) {
        _floorClickCallback = callback;
        floorItems ? _floorItems = floorItems : "";
        if (option) {
            option.defaultFloor ? _defaultFloor = option.defaultFloor : "";
            option.parentDom ? $parentDom = option.parentDom : "";
        }
        _init();
        _setData(_floorItems);
    }

    function _hide() {
        $jqDom.hide();
    }

    function _setData(floorItems) {
        $floorListDom.html("");
        floorItems ? _floorItems = floorItems : "";
        if (floorItems.length <= 1) {
            $floorListDom.css("height", "36px");
        }
        else if (floorItems.length == 2) {
            $floorListDom.css("height", "72px");
        }
        else if (floorItems.length == 3) {
            $floorListDom.css("height", "108px");
        }
        else if (floorItems.length == 4) {
            $floorListDom.css("height", "144px");
        }
        else  {
            $floorListDom.css("height", "180px");
        }
        for (var i = 0; i < floorItems.length; i++) {
            var floorName = floorItems[i].floor;
            if (floorName.indexOf(".") > 0) {
                floorName = floorName.replace(".", "_");
                _defaultFloor = _defaultFloor.replace(".", "_");
            }
            var strItem = '<a id="floorItem_' + floorName + '" class="control-floor-item" href="javascript:;">' + floorItems[i].floor + '</a>';
            $floorListDom.append(strItem);
            var $floorItem = $floorListDom.find("#floorItem_" + floorName);
            if (floorName.toUpperCase() == _defaultFloor.toUpperCase()) {
                $focusItemDom = $floorItem;
                $focusItemDom ? $focusItemDom.addClass("indoor-disabled") : null;
                if (i == 0) {
                    $jqDom.find('.control-floor-plus').addClass("indoor-disabled");
                }
                if (i == floorItems.length - 1) {
                    $jqDom.find('.control-floor-minus').addClass("indoor-disabled");
                }
            }
            _floorDomItems.push($floorItem);
            $floorItem.data("floor", floorItems[i].floor);
            $floorItem.on("click", function (e) {
                event.stopPropagation();
                event.preventDefault();
                _focusFloorItem($(e.target));
                _updateBarStatus();
            });
        }
        _scrollTo(_defaultFloor);
        _updateBarStatus();
    }

    function _focusFloorItem($itemDom) {
        $focusItemDom ? $focusItemDom.removeClass("indoor-disabled") : null;
        $focusItemDom = $itemDom;
        $focusItemDom ? $focusItemDom.addClass("indoor-disabled") : null;
        var floor = $focusItemDom.data("floor");
        _floorClickCallback ? _floorClickCallback(floor) : "";
    }

    function _updateBarStatus() {
        for (var i = 0; i < _floorItems.length; i++) {
            if ($focusItemDom.data("floor") == _floorItems[i].floor) {
                if (i == _floorItems.length - 1) {
                    $jqDom.find('.control-floor-minus').addClass("indoor-disabled");
                }
                if (i < _floorItems.length - 1) {
                    $jqDom.find('.control-floor-minus').removeClass("indoor-disabled");
                }
                if (i > 0) {
                    $jqDom.find('.control-floor-plus').removeClass("indoor-disabled");
                }
                if (i == 0) {
                    $jqDom.find('.control-floor-plus').addClass("indoor-disabled");
                }
                break;
            }
        }
    }

    function _scrollTo(floorName){
        var container = $floorListDom,
        scrollTo = $('#floorItem_' + floorName.toUpperCase());
        //container.scrollTop(
        //    scrollTo.offset().top - container.offset().top + container.scrollTop()
        //);
        if (scrollTo.length > 0) {
            container.animate({
                scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
            })
        }
    }

    function _setFloorValue(floorName) {
        if (floorName.indexOf(".") > 0) {
            floorName = floorName.replace(".", "_");
        }
        var $itemDom = $floorListDom.find("#floorItem_" + floorName);
        $focusItemDom ? $focusItemDom.removeClass("indoor-disabled") : null;
        $focusItemDom = $itemDom;
        $focusItemDom ? $focusItemDom.addClass("indoor-disabled") : null;
        _scrollTo(floorName);
    }

    window.Rtmap.FloorControl = {
        show: _show,
        setData:_setData,
        hide: _hide,
        setFloorValue: _setFloorValue
    }
})()
