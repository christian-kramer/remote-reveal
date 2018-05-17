$(document).ready(function () {
    $('#remote').click(function () {
        $("#mainCarousel").carousel(3);
        $('#codesubmit').click(function () {
            var codeinput = $('#codeinput').val();
            var numberinput = $('#numberinput').val();
            $.get("backend/client.php?id=" + codeinput + "&data=" + numberinput, function (data) {
                var response = JSON.parse(data);
                var responsedata = response.data;
                var responsecode = response.code;
                if (responsecode == 200) {
                    if (codeinput && numberinput) {
                        $("#mainCarousel").carousel(4);
                        $('#spin').click(function () {
                            $.get("backend/client.php?id=" + codeinput + "&data=" + numberinput + "&spin=true", function (data) {
                                var response = JSON.parse(data);
                                var responsedata = response.data;
                                var responsecode = response.code;
                            });
                        })
                    }
                }
            });
        });
    });
    $('#reset').click(function () {
        $("#mainCarousel").carousel(3);
    });
});
