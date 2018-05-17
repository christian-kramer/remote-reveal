$(document).ready(function () {
    $('#projector').click(function () {
        $("#mainCarousel").carousel(1);
        $.get("backend/server.php", function (data) {
            var response = JSON.parse(data);
            var responsedata = response.data;
            var responsecode = response.code;
            var initialized = false;
            var spun = false;

            $('#joincode').text(responsedata);

            if (responsecode == 200) {
                setInterval(function () {
                    $.get("backend/server.php?id=" + responsedata, function (data) {
                        var response = JSON.parse(data);
                        var responsedata = response.data;
                        var responsecode = response.code;

                        if (responsecode == 200) {
                            statusarea = JSON.parse(responsedata);
                            if (statusarea.code == 0) {
                                $('#statusarea').text(statusarea.data);
                            }
                            if (!initialized && statusarea.code == 100) {
                                $("#mainCarousel").carousel(2);
                                initialized = bandit.init(statusarea.data);
                            }
                            if (!spun && statusarea.code == 200) {
                                spun = bandit.spin();
                            }
                        }

                    });
                }, 3000);
            }

        });
    });
});