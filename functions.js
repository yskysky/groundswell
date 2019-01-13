var self = this;

self.main = function() {
    self.init();

}

self.init = function() {
    self.initPosition();

}

self.initPosition = function() {
    var coverImageHeight = $("#groundswell")[0].clientHeight;
    var currentTopMargin = parseInt($("#anotherLayer").css("top"), 10);
    //$("#anotherLayer").css({ "top": coverImageHeight * 6 / 10 + currentTopMargin });

    var instImageHeight = $(".groundswell_inst").find("img")[0].clientHeight;
    var currentTopMargin = parseInt($(".groundswell_album").css("top"), 10);
    $(".groundswell_album").css({ "top": currentTopMargin + instImageHeight });


    var albumImageHeight = $(".groundswell_album").find("img")[0].clientHeight;
    $("#credits").css({ "top": currentTopMargin + instImageHeight + albumImageHeight });

}

self.main();